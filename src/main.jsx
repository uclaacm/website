import 'main.scss';

import React from 'react';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import {render} from 'react-dom';

import Footer from './components/Footer/';
import Navbar from './components/Navbar';

import Home from './components/home';
import About from './components/about';
import Sponsors from './components/sponsors';
import Events from './components/events';

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
