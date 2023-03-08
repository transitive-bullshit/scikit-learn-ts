import * as cheerio from 'cheerio'
import got from 'got'

import * as types from './types'

const methodIgnoreList = new Set(['get_params', 'set_params'])

export async function getAndParseDoc(url: string): Promise<types.PyDocClass> {
  const res = await got(url).text()
  // console.log(res)

  const $ = cheerio.load(res)
  const $s = $('section')[0]
  const $c = $('.py.class', $s)[0]
  const fullName = $('h1', $s).text().replaceAll(/¶/g, '').trim()
  const nameParts = fullName.split('.')
  const namespace = nameParts.slice(0, -1).join('.')
  const name = nameParts.slice(-1)[0]

  const desc = parseDesc($, $('dd', $c))

  const $l = $('.field-list', $c)[0]
  const $params = $('dd:nth-child(2) dt', $l)
  const $attribs = $('dd:nth-child(4) dt', $l)
  const $methods = $('.py.method', $c)

  const params = parseValues($, $params)
  const attribs = parseValues($, $attribs)

  const methods = $methods
    .map((_, m) => {
      const $top = $(m).find('> dt').first()
      const id = $top.attr('id')
      const $body = $top.next()
      const desc = parseDesc($, $body)
      const name = id.replace(fullName, '').replace(/^\./, '').trim()

      if (methodIgnoreList.has(name)) {
        return null
      }

      const $p = $('.field-list', $body).first()
      const $params = $('dd:nth-child(2) dt', $p)
      const $return = $('dd:nth-child(4) dt', $p)

      return {
        name,
        desc,
        params: parseValues($, $params),
        return: parseValues($, $return)[0]
      } as types.PyDocMethod
    })
    .toArray()
    .filter(Boolean)

  return {
    namespace,
    name,
    desc,
    url,
    params,
    attribs,
    methods
  }
}

export function parseValues(
  $: cheerio.CheerioAPI,
  $values: cheerio.Cheerio<cheerio.Element>
): types.PyDocParam[] {
  return $values
    .map((_, v) => ({
      name: $(v).find('strong').first().text().replaceAll(/\*/g, '').trim(),
      type: $(v)
        .find('.classifier')
        .first()
        .text()
        .replaceAll(/\s\s+/g, ' ')
        .trim(),
      desc: parseDesc($, $(v).next())
    }))
    .toArray()
    .filter((v) => v.name)
    .map((v) => ({ ...v, type: parseDocType(v.type) }))
}

export function parseDesc(
  $: cheerio.CheerioAPI,
  $body: cheerio.Cheerio<cheerio.Element>
): string {
  // TODO: parse $body as markdown
  let desc = ''
  let $p = $body.first().find('p').first()

  while ($p.length && $p.is('p')) {
    const text = $p.text().replaceAll(/\n/g, ' ').trim()
    if (text.toLowerCase().includes('read more in the user guide')) {
      break
    }
    desc += text + '\n\n'
    $p = $p.next()
  }

  desc = desc.trim()
  return desc
}

export function parseDocType(input: string) {
  const p = input.replaceAll(/\s\s+/g, ' ').trim().split(', default=')

  if (p.length > 2) {
    throw new Error(`invalid text: ${input}`)
  } else {
    const res: types.PyDocType = { type: parseType(p[0]), raw: input }

    if (p.length === 2) {
      res.default = parseValue(p[1])
    }

    res.isNDArray = /\bof shape\b/i.test(p[0]) || /ndarray/i.test(res.type)
    return res
  }
}

export function parseType(input: string) {
  input = input?.trim()

  const knownValues = {
    True: 'boolean',
    False: 'boolean',
    bool: 'boolean',
    int: 'number',
    float: 'number',
    str: 'string',
    list: 'any[]',
    dict: 'any',
    // we explicitly don't support callables
    callable: null,
    'array-like': 'ArrayLike',
    ndarray: 'NDArray',
    'sparse matrix': 'SparseMatrix'
  }

  if (input in knownValues) return knownValues[input]

  const mOR = input.match(/^(.+) or (.+)$/i)
  if (mOR) {
    return Array.from(
      new Set([parseType(mOR[1]), parseType(mOR[2])].filter(Boolean))
    ).join(' | ')
  }

  const mSet = input.match(/^\{(.+)\}$/i)
  if (mSet) {
    const opts = mSet[1].split(',').map((o) => o.trim())
    return Array.from(new Set(opts.map(parseType).filter(Boolean))).join(' | ')
  }

  const mArray = input.match(/^(.+) of shape \((.+)\)$/i)
  if (mArray) {
    const type = parseType(mArray[1])
    const numDims =
      mArray[2]
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean).length - 1
    if (!type) return 'any[]'
    const suffix = Array(numDims).fill('[]').join('')
    // console.log('array', mArray[0], type, numDims)
    return `${type}${suffix}`
  }

  const mComma = input.match(/^(.+), (.+)$/i)
  if (mComma) {
    return Array.from(
      new Set([parseType(mComma[1]), parseType(mComma[2])].filter(Boolean))
    ).join(' | ')
  }

  const mValue = parseValue(input)
  if (mValue) {
    if (typeof mValue === 'string') return `'${mValue}'`
    return typeof mValue
  }

  return null
}

export function parseValue(
  input: string
): boolean | number | string | undefined {
  input = input?.trim()
  if (!input) return null

  const knownValues = {
    True: true,
    False: false,
    None: undefined
  }

  if (input in knownValues) return knownValues[input]

  // ’euclidean’
  // ’barnes_hut’
  // ”auto”
  // “random”
  const m = input.match(/^['‘’”“"](.*)['‘’”“"]$/)
  if (m) return m[1]

  const possibleNumber = parseFloat(input)
  if (!isNaN(possibleNumber)) return possibleNumber

  // throw new Error(`invalid value: ${input}`)
  return null
}
