import fs from 'node:fs/promises'
import path from 'node:path'

import mkdir from 'mkdirp'
import pMap from 'p-map'

import { generateDefinition } from '@/generator'
import { fetchAndParseScikitLearnDoc, fetchScikitLearnIndex } from '@/parser'

async function main() {
  const outDir = path.join('lib', 'generated')
  await mkdir(outDir)

  // 487 total definitions
  // 228 functions
  // 259 classes (251 generate without errors)

  const scikitDocUrls = await fetchScikitLearnIndex()
  console.log(scikitDocUrls.length, scikitDocUrls)
  // console.log(JSON.stringify(scikitDocUrls, null, 2))

  const sources = scikitDocUrls.filter((url) => {
    const nameParts = url.split('/').slice(-1)[0].split('.')
    const name = nameParts.slice(-2)[0]
    if (name.toLowerCase() === name) {
      // TODO: likely a function
      console.log('skipping', nameParts.slice(0, -1).join('.'))
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
        concurrency: 8
      }
    )
  ).filter(Boolean)

  console.log(`\nprocessing ${docs.length} docs...\n`)
  // console.log(JSON.stringify(docs[0], null, 2))

  await pMap(
    docs,
    async (doc) => {
      try {
        if (!doc) {
          return
        }

        if (doc.type === 'function') {
          // TODO
          console.log('skipping function', `${doc.namespace}.${doc.name}`)
          return
        }

        // console.log(JSON.stringify(doc, null, 2))

        const source = await generateDefinition(doc)
        const filePath = path.join(outDir, `${doc.name}.ts`)
        await fs.writeFile(filePath, source, 'utf-8')
        console.log(filePath)
      } catch (err) {
        console.warn(
          '\n',
          'error generating doc',
          doc.name,
          doc.type,
          err.toString(),
          '\n'
        )
        console.log(JSON.stringify(doc, null, 2))
      }
    },
    {
      concurrency: 8
    }
  )
}

main()
