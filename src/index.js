import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import repositories from './reducers/repositories'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    repositories
});
const middleware = () => applyMiddleware(thunk);

const store = createStore(reducers, middleware(), undefined);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
