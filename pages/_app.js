import React from 'react';
import '../styles/App.scss';

export default function App({ Component, pageProps}) {
  return (
      <Component {...pageProps} />
  );
}
