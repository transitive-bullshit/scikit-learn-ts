import assert from 'node:assert'

import * as cheerio from 'cheerio'
import { type Element } from 'domhandler'
import got from 'got'
import html2md from 'html-to-md'
import isRelativeUrl from 'is-relative-url'

import type * as types from './types'
import { isValidPythonIdentifier } from './utils'

const methodIgnoreList = new Set(['get_params', 'set_params'])

export async function fetchScikitLearnIndex({
  // indexUrl = 'https://scikit-learn.org/stable/api/index.html'
  indexUrl = 'https://scikit-learn.org/stable/api/index.html'
}: { indexUrl?: string } = {}): Promise<string[]> {
  const res = await got(indexUrl).text()
  // console.log(res)

  let baseUrl: string
  try {
    const parsedIndexUrl = new URL(indexUrl)
    const pathnameParts = parsedIndexUrl.pathname.split('/')
    const relativePathname = pathnameParts.slice(0, -1).join('/')
    baseUrl = `${parsedIndexUrl.origin}${relativePathname}/`
  } catch {
    throw new Error(`Invalid indexUrl: ${indexUrl}`)
  }

  const $ = cheerio.load(res)
  const $api = $('#api-reference').first()

  const links = $api
    .find('a.reference.internal')
    .map((_, a) => {
      const title = $(a).attr('title')
      let href = $(a).attr('href')
      if (isRelativeUrl(href)) {
        href = `${baseUrl}${href}`
      }

      return {
        href,
        title
      }
    })
    .toArray()
    .filter((a) => a.href && a.title)
    .filter((a) => /\/generated\//.test(a.href))
    .filter(
      (a) =>
        !a.title.startsWith('sklearn.datasets') &&
        !a.title.startsWith('sklearn.base') &&
        !a.title.startsWith('sklearn.get_config') &&
        !a.title.startsWith('sklearn.set_config')
    )

  const urls = links
    .map((a) => {
      try {
        // validate that this is a valid URL and remove query params + hash
        const parsedUrl = new URL(a.href)
        return `${parsedUrl.origin}${parsedUrl.pathname}`
      } catch {
        return
      }
    })
    .filter(Boolean)

  return Array.from(new Set(urls))
}

export async function fetchAndParseScikitLearnDoc(
  url: string
): Promise<types.PyDocDefinition> {
  const res = await got(url).text()
  // console.log(res)

  let baseUrl: string
  try {
    const parsedIndexUrl = new URL(url)
    const pathnameParts = parsedIndexUrl.pathname.split('/')
    const relativePathname = pathnameParts.slice(0, -1).join('/')
    baseUrl = `${parsedIndexUrl.origin}${relativePathname}/`
  } catch {
    throw new Error(`Invalid url: ${url}`)
  }

  const $ = cheerio.load(res)
  $('a').each((_, a) => {
    const href = $(a).attr('href')
    if (isRelativeUrl(href)) {
      $(a).attr('href', `${baseUrl}${href}`)
    }
  })

  const $s = $('section')[0]
  const $c = $('.py.class', $s)[0]
  const $f = $('.py.function', $s)[0]
  const type = $c ? 'class' : 'function'
  const $body = $c || $f
  if (!$c && !$f) {
    // neither a class or a function
    return null
  }

  const parsedUrl = new URL(url)
  const namespace = parsedUrl.pathname
    .split('/')
    .at(-1)
    .split('.')
    .slice(0, -2)
    .join('.')

  const name = $('h1', $s)
    .text()
    .replaceAll('¶', '')
    .replaceAll(/[\W_]+/g, '')
    .trim()

  const desc = parseDesc($, $('dd', $body))

  const $l = $('.field-list', $body)[0]
  const $params = $('dd:nth-child(2) dt', $l)
  const params = parseValues($, $params)

  const baseDefinition = {
    type,
    namespace,
    name,
    desc,
    url,
    params
  }

  assert(name)
  assert(type)
  assert(url)
  assert(namespace)

  console.log(namespace)

  if (type === 'function') {
    const $returns = $('dd:nth-child(4) dt', $l)
    const returns = parseValues($, $returns)[0]

    return {
      ...baseDefinition,
      type,
      returns
    }
  } else {
    const $attribs = $('dd:nth-child(4) dt', $l)
    const attribs = parseValues($, $attribs)

    const $methods = $('.py.method', $body)

    const methods = $methods
      .map((_, m) => {
        const $top = $(m).find('> dt').first()
        const id = $top.attr('id')
        const $body = $top.next()
        const desc = parseDesc($, $body)
        const name = id.split('.').at(-1).trim()

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
          returns: parseValues($, $return)[0]
        } as types.PyDocMethod
      })
      .toArray()
      .filter(Boolean)

    return {
      ...baseDefinition,
      type,
      attribs,
      methods: dedupeValues(methods)
    }
  }
}

export function parseValues(
  $: cheerio.CheerioAPI,
  $values: cheerio.Cheerio<Element>
): types.PyDocParam[] {
  const values = $values
    .map((_, v) => ({
      name: $(v).find('strong').first().text().replaceAll('*', '').trim(),
      type: $(v)
        .find('.classifier')
        .first()
        .text()
        .replaceAll(/\s\s+/g, ' ')
        .trim(),
      desc: parseDesc($, $(v).next())
    }))
    .toArray()
    .filter((v) => isValidPythonIdentifier(v.name))
    .map((v) => ({ ...v, type: parseDocType(v.type) }))

  return dedupeValues(values)
}

export function parseDesc(
  $: cheerio.CheerioAPI,
  $body: cheerio.Cheerio<Element>
): string {
  let desc = ''
  let $p = $body.first().find('p').first()

  while ($p.length && $p.is('p')) {
    const html = $p.html()
    const md = html2md(html)
    const text = md
      .replaceAll('\n', ' ')
      .trim()
      .replaceAll('`True`', '`true`')
      .replaceAll(/([^\w`])True([^\w`])/g, '$1`true`$2')
      .replaceAll('`False`', '`false`')
      .replaceAll(/([^\w`])False([^\w`])/g, '$1`false`$2')
      .replaceAll('`None`', '`undefined`')
      .replaceAll(/([^\w`])None([^\w`])/g, '$1`undefined`$2')
      // .replaceAll(/(`[\w=]*)\\([\w=]*`)/g, '$1$2')
      .replaceAll('\\_', '_')
      // .replaceAll(/\b`(\w)+)=()`\b/g, '`$1: $2`')
      .trim()

    // console.log({
    //   html,
    //   md,
    //   text
    // })

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

  const mSet = input.match(/^{(.+)}$/i)
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
    const suffix = Array.from({ length: numDims }).fill('[]').join('')
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

  // examples of different string quotation types used by the HTML docs
  // ’euclidean’
  // ’barnes_hut’
  // ”auto”
  // “random”
  const m = input.match(/^["'‘’“”](.*)["'‘’“”]$/)
  if (m) return m[1]

  const possibleNumber = Number.parseFloat(input)
  if (!Number.isNaN(possibleNumber)) return possibleNumber

  // throw new Error(`invalid value: ${input}`)
  return null
}

function dedupeValues<
  T = types.PyDocParam | types.PyDocMethod | types.PyDocAttrib
>(params: T[]): T[] {
  const seen = new Set<string>()

  return params.filter((p: any) => {
    if (seen.has(p.name)) {
      return false
    }

    seen.add(p.name)
    return true
  })
}
