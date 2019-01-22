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
import Sponsors from 'containers/sponsors';
import Media from 'containers/media';

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
			// <Provider store={store}>
				<BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
					<div>
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route exact path="/about" component={About}/>
							<Route exact path="/events" component={Home}/>
							<Route exact path="/sponsors" component={Sponsors}/>
							<Route exact path="/media" component={Media}/>
							<Redirect to="/"/>
						</Switch>
					</div>
				</BrowserRouter>
			// </Provider>
		);
	}
}

render(<App />, document.getElementById('mount'));
