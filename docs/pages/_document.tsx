import * as React from 'react'
import { Analytics } from '@vercel/analytics/react'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head />

        <body>
          <Main />

          <NextScript />

          <Analytics />
        </body>
      </Html>
    )
  }
}

export default MyDocument
