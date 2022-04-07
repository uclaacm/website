import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/App.scss';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function App({ Component, pageProps}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const axe = require('@axe-core/react');
      axe(React, ReactDOM, 1000);
    }
  }, []);
  return (
      <>
        <Head>
          {/* see: https://nextjs.org/docs/messages/no-document-viewport-meta */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>ACM chapter at UCLA | Association for Computing Machinery</title>
        </Head>
        <Component {...pageProps} />
      </>
  );
}
