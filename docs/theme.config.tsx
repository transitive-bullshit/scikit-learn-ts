import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import React from 'react'

const config: DocsThemeConfig = {
  logo: <span>scikit-learn-ts</span>,
  project: {
    link: 'https://github.com/transitive-bullshit/scikit-learn-ts'
  },
  docsRepositoryBase:
    'https://github.com/transitive-bullshit/scikit-learn-ts/blob/main/docs',
  editLink: {
    text: 'Edit this page on GitHub'
  },
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      <link rel='shortcut icon' href='/favicon.ico' />
      <link rel='icon' type='image/png' sizes='32x32' href='favicon-32.png' />
    </>
  ),
  footer: {
    text: 'scikit-learn-ts'
  }
}

export default config
