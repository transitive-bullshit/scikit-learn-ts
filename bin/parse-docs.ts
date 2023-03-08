import fs from 'node:fs/promises'
import path from 'node:path'

import mkdir from 'mkdirp'
import pMap from 'p-map'

import { formatSource } from '@/formatter'
import { generateDefinition } from '@/generator'
import { fetchAndParseScikitLearnDoc, fetchScikitLearnIndex } from '@/parser'

async function main() {
  const outDir = path.join('lib', 'generated')
  await mkdir(outDir)

  // 487 total definitions
  // 228 functions
  // 259 classes

  const scikitDocUrls = await fetchScikitLearnIndex()
  console.log(scikitDocUrls.length, scikitDocUrls)
  // console.log(JSON.stringify(scikitDocUrls, null, 2))

  const sources = scikitDocUrls.filter((url) => {
    const nameParts = url.split('/').slice(-1)[0].split('.')
    const name = nameParts.slice(-2)[0]
    if (name.toLowerCase() === name) {
      // TODO: likely a function
      // console.log('skipping', nameParts.slice(0, -1).join('.'))
      return false
    }

    return true
  })
  // console.log(sources.length, sources)
  // return

  // const sources = [
  //   'https://scikit-learn.org/stable/modules/generated/sklearn.metrics.average_precision_score.html'
  //   // 'https://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE.html',
  //   // 'https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html',
  //   // 'https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MinMaxScaler.html',
  //   // 'https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html',
  //   // 'https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html'
  // ]

  console.log(`\nfetching ${sources.length} docs...\n`)

  const docs = (
    await pMap(
      sources,
      async (url, index) => {
        console.log(`${index}) fetching ${url}`)
        try {
          const doc = await fetchAndParseScikitLearnDoc(url)
          if (!doc) {
            console.warn(`warn doc ${index} is empty ${url}`)
          }
          return doc
        } catch (err) {
          console.warn(`error fetching doc ${index} ${url}`, err.toString())
        }
      },
      {
        concurrency: 32
      }
    )
  ).filter(Boolean)

  console.log(`\nprocessing ${docs.length} docs...\n`)
  // console.log(JSON.stringify(docs[0], null, 2))

  const errors: string[] = []
  const generatedDirs: any = {}

  const results = (
    await pMap(
      docs,
      async (doc) => {
        try {
          if (!doc) {
            return
          }

          if (doc.type === 'function') {
            // TODO
            // console.log('skipping function', `${doc.namespace}.${doc.name}`)
            return
          }

          // console.log(JSON.stringify(doc, null, 2))

          const source = await generateDefinition(doc)
          const fileName = `${doc.name}.ts`
          const namespaceDirs = doc.namespace.split('.').slice(1)
          const destDir = path.join(outDir, ...namespaceDirs)
          await mkdir(destDir)

          const filePath = path.join(destDir, fileName)
          await fs.writeFile(filePath, source, 'utf-8')

          let generatedDir = generatedDirs
          for (const dir of namespaceDirs) {
            if (!generatedDir[dir]) {
              generatedDir[dir] = {}
            }

            generatedDir = generatedDir[dir]
          }
          generatedDir[fileName] = true

          console.log(filePath)
          return filePath
        } catch (err) {
          console.warn(
            '\n',
            'error generating doc',
            doc.name,
            doc.type,
            err.toString(),
            '\n'
          )
          errors.push(`${doc.namespace}.${doc.name}`)
          console.log(JSON.stringify(doc, null, 2))
        }
      },
      {
        concurrency: 8
      }
    )
  ).filter(Boolean)

  async function visitDir(dir: any, parents: string[]) {
    if (typeof dir !== 'object') {
      return
    }

    let indexFileSource = ''
    for (const [key, value] of Object.entries(dir)) {
      await visitDir(value, [...parents, key])
      const keyPrefix = key.split('.')[0]
      indexFileSource += `export * from './${keyPrefix}'\n`
    }

    const source = await formatSource(indexFileSource)
    const fileName = 'index.ts'
    const destDir = path.join(outDir, ...parents)
    const filePath = path.join(destDir, fileName)
    await fs.writeFile(filePath, source, 'utf-8')
    console.log(filePath)
  }

  console.log()

  // recursively generate index.ts files for all directories
  await visitDir(generatedDirs, [])

  console.log(
    `\ngenerated ${results.length} files out of ${docs.length} total docs`,
    errors.length ? errors : '(no errors!)'
  )
}

main()
