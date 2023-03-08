import fs from 'node:fs/promises'
import path from 'node:path'

import mkdir from 'mkdirp'
import pMap from 'p-map'

import { generateClass } from '@/generator'
import { getAndParseDoc } from '@/parser'

async function main() {
  const outDir = path.join('lib', 'generated')
  await mkdir(outDir)

  const sources = [
    'https://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE.html',
    'https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html',
    'https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MinMaxScaler.html'
    // 'https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html',
    // 'https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html'
  ]
  const docs = await pMap(sources, async (url) => getAndParseDoc(url), {
    concurrency: 4
  })
  // console.log(JSON.stringify(doc, null, 2))

  await pMap(
    docs,
    async (doc) => {
      try {
        console.log(JSON.stringify(doc, null, 2))
        const src = await generateClass(doc)
        await fs.writeFile(path.join(outDir, `${doc.name}.ts`), src, 'utf-8')
      } catch (err) {
        console.warn('error generating doc', doc.name, err.toString())
      }
    },
    {
      concurrency: 1
    }
  )
}

main()
