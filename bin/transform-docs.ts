import fs from 'node:fs/promises'
import path from 'node:path'

import { globby } from 'globby'
import mkdir from 'mkdirp'
import pMap from 'p-map'

async function main() {
  const srcDocsDir = path.join('packages', 'sklearn', 'docs')
  const outDir = path.join('docs', 'pages', 'docs')
  await mkdir(outDir)

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

  await pMap(
    docs,
    async (doc) => {
      console.log(`processing ${doc.relativePath}`)

      let out = await fs.readFile(doc.srcPath, 'utf-8')

      out = out
        .replaceAll(
          /^Defined in: *(.*)$\n\nDefined in: .*$/gm,
          'Defined in: $1'
        )
        .replaceAll(/\[([^\]]+)\]\((\.\.[^\)]+)\)/g, '$1')

      if (doc.relativePath === 'modules.md') {
        out = out.replaceAll(/### Variables\b/g, '### Constants')
      }

      await mkdir(path.dirname(doc.destPath))
      await fs.writeFile(doc.destPath, out, 'utf-8')
    },
    {
      concurrency: 8
    }
  )

  {
    const docsMeta = {
      modules: 'Table of Contents',
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
      path.join(outDir, '_meta.json'),
      JSON.stringify(docsMeta, null, 2),
      'utf-8'
    )
  }
}

main()
