import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import React from 'react'

const siteHost = 'scikit-learn-ts.vercel.app'
const siteUrl = `https://${siteHost}`
const siteSocialUrl = `${siteUrl}/social.png`
const siteDesc = `Use Python's #1 machine learning library from Node.js`
const siteTitle = 'sklearn'

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
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: `%s – ${siteTitle}`
      }
    }
  },
  head: function useHead() {
    const { title } = useConfig()
    // const { route } = useRouter()

    return (
      <>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <meta httpEquiv='Content-Language' content='en' />
        <meta name='description' content={siteDesc} />
        <meta name='og:description' content={siteDesc} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={siteSocialUrl} />
        <meta name='twitter:site:domain' content={siteHost} />
        <meta name='twitter:url' content={siteUrl} />

        <meta
          name='og:title'
          content={title ? `${title} – ${siteTitle}` : siteTitle}
        />
        <meta name='og:image' content={siteSocialUrl} />
        <meta name='apple-mobile-web-app-title' content='sklearn' />

        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='32x32' href='favicon-32.png' />
      </>
    )
  },
  footer: {
    text: 'scikit-learn-ts'
  }
}

export default config