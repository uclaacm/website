import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout(props) {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="main-container" role="main">
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
