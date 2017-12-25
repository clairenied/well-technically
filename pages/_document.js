import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import { initGA, logPageView } from './analytics';

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

  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true;
    }
    logPageView();
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


        </body>
      </html>
    );
  }
};
