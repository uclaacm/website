import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/App.scss';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function App({ Component, pageProps }) {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const axe = require('@axe-core/react');
      axe(React, ReactDOM, 1000);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const hasSeenPopup = localStorage.getItem('mailchimpPopupShown');

        if (!hasSeenPopup) {
          setShowPopup(true);
          localStorage.setItem('mailchimpPopupShown', 'true');
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('LocalStorage access error:', error);
      }
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setShowPopup(false);

      const existingScript = document.getElementById('mailchimp-popup');
      if (existingScript) {
        existingScript.remove();
      }

      document.querySelectorAll(
        '.mc-modal, #mc_embed_signup, .modalContent, .bannerContent, #dijit__TemplatedMixin_0, [data-dojo-attach-point="bannerContainer"], [data-dojo-attach-point="modalOpen"], [data-dojo-attach-point="bannerDescriptionContainer"]',
      ).forEach(el => {
        el.remove();
      });

      setTimeout(() => {
        document.querySelectorAll('.bannerContent, #dijit__TemplatedMixin_0').forEach(el => {
          el.style.display = 'none';
          el.style.visibility = 'hidden';
          el.style.opacity = '0';
        });
      }, 1000);

    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <Head>
        {/* see: https://nextjs.org/docs/messages/no-document-viewport-meta */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ACM at UCLA | Association for Computing Machinery</title>
      </Head>

      {showPopup && (
        <Script
          id="mailchimp-popup"
          strategy="afterInteractive"
          src="https://chimpstatic.com/mcjs-connected/js/users/5666284d62e955e1bc84f7ba0/4a4c455ee0b05fb0493dc86b2.js"
        />
      )}
      <Component {...pageProps} />
    </>
  );
}
