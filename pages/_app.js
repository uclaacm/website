import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import React from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/App.scss';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function App({ Component, pageProps}) {
  return (
      <>
        <Head>
          <title>ACM at UCLA | Association for Computing Machinery</title>
        </Head>
        <Component {...pageProps} />
      </>
  );
}
