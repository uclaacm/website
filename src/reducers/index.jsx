import {createStore, combineReducers, applyMiddleware} from 'redux';
import {routerReducer, routerMiddleware, push} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

const history = createHistory();
const routing = routerMiddleware(history);

const store = createStore(
  combineReducers({
    router: routerReducer,
  }),
  applyMiddleware(routing, thunk)
);

const Action = {
};

export {
  store, history, Action,
}
