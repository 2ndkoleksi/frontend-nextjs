import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
          />
          <meta
            name='description'
            content='2ndkoleksi is a platform to buy and sell your branded lovely stuff which no longer you wear and turn it into cash 💲💰💲'
          />
          <meta
            name='keywords'
            content='2ndkoleksi, branded stuff, branded, consignment'
          />

          <link rel='manifest' href='/manifest.json' />

          <meta name='theme-color' content='#fff' />
          <meta name='mobile-web-app-capable' content='yes' />

          <meta name='apple-mobile-web-app-title' content='2ndkoleksi' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          {/* <link rel="apple-touch-icon" href="/example.png"></link> */}

          <meta name='msapplication-navbutton-color' content='#ED4198' />
          <meta name='msapplication-TileColor' content='#ED4198' />
          <meta name='msapplication-TileImage' content='ms-icon-144x144.png' />
          <meta name='msapplication-config' content='browserconfig.xml' />

          <meta name='application-name' content='2ndkoleksi' />
          <meta
            name='msapplication-tooltip'
            content='2ndkoleksi - Authentic Brand Seller'
          />
          <meta name='msapplication-starturl' content='/' />

          <meta name='msapplication-tap-highlight' content='no' />

          <meta name='full-screen' content='yes' />
          <meta name='browsermode' content='application' />

          <meta name='nightmode' content='enable/disable' />

          <meta name='layoutmode' content='fitscreen/standard' />

          <meta name='imagemode' content='force' />
        </Head>
        <body>
          <Main />
          <NextScript />

          <style jsx global>
            {`
              @import url('https://fonts.googleapis.com/css?family=Dosis&display=swap');

              html {
                height: 100%;
              }

              body {
                font-family: 'Dosis';
                margin: 0;
                box-sizing: border-box;
                min-height: 100%;
              }
            `}
          </style>
        </body>
      </Html>
    )
  }
}

export default MyDocument
