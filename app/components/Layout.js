import React from 'react';
import Header from './Header';
import { initGA, logPageView } from './analytics';

class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <style global jsx="true">
          {`
            * {
              box-sizing: border-box;
            }

            body {
              font-family: 'Work Sans', sans-serif;
              font-size: 14px;
              line-height: 1.5;
              margin: 0;
            }

            h1, h2, h3, h4, h5, h6 {
              font-family: 'Playfair Display', serif;
              font-weight: 600;
            }

            .container {
              max-width: 720px;
              margin: 0 auto;
              padding: 28px;
            }

            ul {
              list-style: none;
              padding: 0;
            }
          `}
        </style>
      </div>
    );
  }
}

Layout.defaultProps = {
  children: null,
};

export default Layout;
