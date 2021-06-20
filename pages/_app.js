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
          <meta charSet="utf-8" />
          <title>ACM at UCLA | Association for Computing Machinery</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href={'/public/images/logo.png'} rel="icon" type="image/png" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;1,300;1,400&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="ACM at UCLA | Association for Computing Machinery at UCLA" />
        </Head>
        <Component {...pageProps} />
      </>
  );
}
