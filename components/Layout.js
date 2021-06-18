import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout(props) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>ACM at UCLA | Association for Computing Machinery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href={`${process.env.PUBLIC_URL}/images/logo.png`} rel="icon" type="image/png" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;1,300;1,400&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="ACM at UCLA | Association for Computing Machinery at UCLA" />
      </Head>
      <div className="app-container">
        <Navbar />
        <div className="main-container">
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
