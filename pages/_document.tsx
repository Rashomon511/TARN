import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <meta charSet='utf-8' />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta httpEquiv="description" content="rashomon-Tarn" />
          <meta name="author" content="rashomon" />
          <meta name="keywords" content="next" />
          <meta name="renderer" content="webkit" />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}