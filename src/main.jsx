import 'main.scss';
// import 'babel-polyfill';
// import 'whatwg-fetch';

import React from 'react';
// import {Provider, createStore} from 'react-redux';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import {render} from 'react-dom';

// import {store} from 'reducers';

import Footer from './components/Footer/';
import Navbar from './components/Navbar';

import Home from 'containers/home';
import About from 'containers/about';
import Sponsors from 'containers/sponsors';
import Events from 'containers/events';

// hack for convenience
Number.prototype.map = function(fn) {
	const res = [];
	for (let i = 0; i < this.valueOf(); i++)
		res.push(fn(i, res));
	return res;
};

class App extends React.Component {
	render(){
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
							<Redirect to="/"/>
						</Switch>
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

render(<App />, document.getElementById('mount'));
