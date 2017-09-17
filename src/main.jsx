import 'main.scss';
import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import {Provider, createStore} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {render} from 'react-dom';

import {store, history} from 'reducers';

class Main extends React.Component {
	render() {
		return <h1>Hello, World!</h1>;
	}
}

class App extends React.Component {
	render(){
		return (
			<Provider store={store}>
				<ConnectedRouter onUpdate={() => window.scrollTo(0, 0)} history={history}>
					<div>
						<Switch>
							<Route path="/" component={Main}/>
							<Redirect to="/"/>
						</Switch>
					</div>
				</ConnectedRouter>
			</Provider>
		);
	}
}

render(<App />, document.getElementById('mount'));
