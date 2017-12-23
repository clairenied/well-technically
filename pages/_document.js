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
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i|Work+Sans:100,200,300,400,500,600,700,800,900"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
};
