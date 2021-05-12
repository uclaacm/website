import React from 'react';
import './App.scss';

import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import About from './components/About/About';
import Committees from './components/Committees/Committees';
import Events from './components/Events/Event';
import GM from './components/Events/GM/GM';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Sponsors from './components/Sponsors/Sponsor';
import TechGala from './components/TechGala/TechGala'

function App() {
  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <div className="app-container">
        <Navbar />
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/events" component={Events}/>
            <Route exact path="/sponsors" component={Sponsors}/>
            <Route exact path="/committees" component={Committees}/>
            <Route exact path="/gm" component={GM}/>
            <Route exact path="/techgala" component={TechGala}/>
            <Redirect to="/"/>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
