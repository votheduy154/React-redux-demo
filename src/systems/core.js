import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import reducers from './reducers';
import routes from '../application/configs/routes';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk)
)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes}></Router>
    </Provider>
    , document.getElementById('app'));

