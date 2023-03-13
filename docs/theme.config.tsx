import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import React from 'react'

const siteHost = 'scikit-learn-ts.vercel.app'
const siteUrl = `https://${siteHost}`
const siteSocialUrl = `${siteUrl}/social.png`
const siteDesc = `Use Python's #1 machine learning library from Node.js`
const siteTitle = 'sklearn'

const config: DocsThemeConfig = {
  logo: (
    <img
      src='/sklearn-logo.png'
      alt='sklearn'
      className='logo'
      style={{
        maxHeight: 48
      }}
    />
  ),

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
  sidebar: {
    titleComponent
  },
  head: function useHead() {
    const config = useConfig()
    // const { route } = useRouter()
    const title = config?.title ? `${config.title} - ${siteTitle}` : siteTitle

    return (
      <>
        <meta httpEquiv='Content-Language' content='en' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index,follow' />

        <meta name='description' content={siteDesc} />
        <meta property='og:description' content={siteDesc} />
        <meta name='twitter:description' content={siteDesc} />

        <meta property='og:site_name' content={siteTitle} />
        <meta name='apple-mobile-web-app-title' content={siteTitle} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={siteSocialUrl} />
        <meta name='og:image' content={siteSocialUrl} />

        <meta property='twitter:domain' content={siteHost} />
        <meta name='twitter:site:domain' content={siteHost} />

        <meta name='twitter:url' content={siteUrl} />

        <meta property='og:title' content={title} />
        <meta name='twitter:title' content={title} />
        <title>{title}</title>

        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32.png'
        />
      </>
    )
  },
  footer: {
    component: null
  }
}

// TODO: get memoization working here
function titleComponent({
  title
}: {
  title: string
  type: string
  route: string
}) {
  return <span>{title}</span>
}

export default config
