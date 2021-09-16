import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href={'/images/logo.png'} rel="icon" type="image/png" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
          <meta name="theme-color" content="#1E6CFF" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
