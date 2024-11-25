import fs from 'node:fs/promises'
import path from 'node:path'

import pMap from 'p-map'

import { formatSource } from '../src/formatter'
import { generateDefinition } from '../src/generator'
import {
  fetchAndParseScikitLearnDoc,
  fetchScikitLearnIndex
} from '../src/parser'

async function main() {
  const outDir = path.join('packages', 'sklearn', 'src', 'generated')
  await fs.mkdir(outDir, { recursive: true })

  // 487 total definitions
  // 228 functions
  // 259 classes

  const scikitDocUrls = await fetchScikitLearnIndex()
  console.log(scikitDocUrls.length, scikitDocUrls)
  // console.log(JSON.stringify(scikitDocUrls, null, 2))

  const sources = scikitDocUrls.filter((url) => {
    const nameParts = url.split('/').at(-1).split('.')
    const name = nameParts.at(-2)
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
  //   // 'https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html'
  //   'https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRouter.html'
  //   // 'https://scikit-learn.org/stable/modules/generated/sklearn.metrics.average_precision_score.html',
  //   // 'https://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE.html',
  //   // 'https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html',
  //   // 'https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MinMaxScaler.html',
  //   // 'https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html',
  //   // 'https://scikit-learn.org/stable/modules/generated/sklearn.calibration.CalibratedClassifierCV.html'
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
  )
    .filter(Boolean)
    .filter((doc) => doc.type !== 'function')

  console.log(`\nprocessing ${docs.length} docs...\n`)
  // console.log(
  //   JSON.stringify(
  //     docs.map((doc) => doc.name.split('.').at(-1)),
  //     null,
  //     2
  //   )
  // )
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

          // console.log(JSON.stringify(doc, null, 2))

          const source = await generateDefinition(doc)
          const fileName = `${doc.name}.ts`
          const namespaceDirs = doc.namespace.split('.').slice(1)
          const destDir = path.join(outDir, ...namespaceDirs)
          await fs.mkdir(destDir, { recursive: true })

          const filePath = path.join(destDir, fileName)
          await fs.writeFile(filePath, source, 'utf8')

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

    const destDir = path.join(outDir, ...parents)

    {
      // index.ts
      let indexFileSource = ''
      const sortedDirEntries = Object.entries(dir).sort((a, b) =>
        a[0].localeCompare(b[0])
      )

      for (const [key, value] of sortedDirEntries) {
        await visitDir(value, [...parents, key])
        const keyPrefix = key.split('.')[0]
        indexFileSource += `export * from './${keyPrefix}'\n`
      }

      const source = await formatSource(indexFileSource)
      const fileName = 'index.ts'
      const filePath = path.join(destDir, fileName)
      await fs.writeFile(filePath, source, 'utf8')
      console.log(filePath)
    }

    {
      // readme.md
      const readmeFileSource = `# ${['sklearn'].concat(parents).join('.')}

> All files within this directory have been auto-generated by [scikit-learn-ts](https://github.com/transitive-bullshit/scikit-learn-ts).

## License

The official Python \`scikit-learn\` project is licensed under the [BSD 3-Clause](https://github.com/scikit-learn/scikit-learn/blob/main/COPYING).

This project is licensed under MIT © [Travis Fischer](https://transitivebullsh.it).

If you found this project helpful, please consider [donating to the official scikit-learn project](https://scikit-learn.org/stable/about.html#donating-to-the-project), [following @scikit_learn on twitter](https://twitter.com/scikit_learn), or <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
`

      const fileName = 'readme.md'
      const filePath = path.join(destDir, fileName)
      await fs.writeFile(filePath, readmeFileSource, 'utf8')
      console.log(filePath)
    }
  }

  console.log()

  // recursively generate index.ts files for all directories
  await visitDir(generatedDirs, [])

  console.log(
    `\ngenerated ${results.length} source files out of ${docs.length} total docs`,
    errors.length ? errors : '(no errors!)'
  )
}

await main()
