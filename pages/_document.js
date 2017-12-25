import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class WTDocument extends Document {
  static getInitialProps({ renderPage }) {
    const {
      html,
      head,
      errorHtml,
      chunks,
    } = renderPage();

    const styles = flush();

    return {
      html,
      head,
      errorHtml,
      chunks,
      styles,
    };
  }

  render() {

    return (
      <html>
        <Head>
          <title>Well, Technically...</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i|Work+Sans:100,200,300,400,500,600,700,800,900"
            rel="stylesheet"
          />
          <meta name="viewport" content="initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111630586-1" />
          <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','UA-111630586-1');`}}
          />
        </body>
      </html>
    );
  }
};
