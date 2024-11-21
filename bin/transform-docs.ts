import fs from 'node:fs/promises'
import path from 'node:path'

import { globby } from 'globby'
import pMap from 'p-map'

async function main() {
  const srcDocsDir = path.join('packages', 'sklearn', 'docs')
  const outDir = path.join('docs', 'pages', 'docs')
  await fs.mkdir(outDir, { recursive: true })

  const docs = (
    await globby('**/*.md', {
      cwd: srcDocsDir
    })
  )
    .map((filePath) => {
      if (filePath === 'readme.md') {
        return
      }

      const relativePath = filePath
      const destPath = path.join(outDir, filePath)
      const srcPath = path.join(srcDocsDir, filePath)

      return {
        relativePath,
        destPath,
        srcPath
      }
    })
    .filter(Boolean)

  const metaMap: Record<string, string[]> = {
    classes: [],
    functions: [],
    interfaces: [],
    types: [],
    variables: []
  }

  await pMap(
    docs,
    async (doc) => {
      console.log(`processing ${doc.relativePath}`)

      let out = await fs.readFile(doc.srcPath, 'utf8')

      out =
        out
          .replaceAll(
            /^Defined in: *(.*)$\n\nDefined in: .*$/gm,
            'Defined in: $1'
          )
          // TODO: handle relative links
          .replaceAll(/\[([^\]]+)]\((\.\.[^)]+)\)/g, '$1')
          .replaceAll('[Readme](readme.md)', '')
          .trim() + '\n'

      if (doc.relativePath === 'modules.md') {
        out = out.replaceAll(/### Variables\b/g, '### Constants')
      }

      if (doc.relativePath.startsWith('classes/')) {
        metaMap.classes.push(doc.relativePath)
      } else if (doc.relativePath.startsWith('functions/')) {
        metaMap.functions.push(doc.relativePath)
      } else if (doc.relativePath.startsWith('interfaces/')) {
        metaMap.interfaces.push(doc.relativePath)
      } else if (doc.relativePath.startsWith('types/')) {
        metaMap.types.push(doc.relativePath)
      } else if (doc.relativePath.startsWith('variables/')) {
        metaMap.variables.push(doc.relativePath)
      }

      await fs.mkdir(path.dirname(doc.destPath), { recursive: true })
      await fs.writeFile(doc.destPath, out, 'utf8')
    },
    {
      concurrency: 8
    }
  )

  {
    // top-level nextra _meta.json file
    const docsMeta = {
      // modules: 'Table of Contents',
      classes: 'Classes',
      functions: 'Functions',
      interfaces: {
        title: 'Interfaces',
        display: 'hidden'
      },
      types: 'Types',
      variables: 'Constants'
    }

    await fs.writeFile(
      path.join(outDir, '_meta.ts'),
      `export default ${JSON.stringify(docsMeta, null, 2)}`,
      'utf8'
    )
  }

  // sub nextra _meta.json files
  await pMap(
    Object.keys(metaMap),
    async (key) => {
      const values = metaMap[key]
        .map((value) => value.split('/').at(-1).split('.')[0].trim())
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b))

      if (!values.length) {
        return
      }

      const meta = Object.fromEntries(values.map((value) => [value, value]))

      const destDir = path.join(outDir, key)

      await fs.writeFile(
        path.join(path.join(destDir, '_meta.ts')),
        `export default ${JSON.stringify(meta, null, 2)}`,
        'utf8'
      )
    },
    {
      concurrency: 4
    }
  )
}

await main()
