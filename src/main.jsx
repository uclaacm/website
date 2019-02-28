import 'main.scss';
// import 'babel-polyfill';
// import 'whatwg-fetch';

import React from 'react';
// import {Provider, createStore} from 'react-redux';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import {render} from 'react-dom';

// import {store} from 'reducers';

import Home from 'containers/home';
import About from 'containers/about';
import Events from 'containers/events';
import Sponsors from 'containers/sponsors';

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
				<div>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/about" component={About}/>
						<Route exact path="/events" component={Events}/>
						<Route exact path="/sponsors" component={Sponsors}/>
						<Redirect to="/"/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

render(<App />, document.getElementById('mount'));
