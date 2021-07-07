import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

//import styles from '../styles/Layout.module.scss';

function Layout(props) {
  return (
    <>
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
