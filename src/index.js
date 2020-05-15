import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// Css
import './index.css';
// Components
import App from './App';
// Router
import {BrowserRouter, Route} from "react-router-dom";
// Redux
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import rootReducers from "./Redux/reducers/rootReducers";
import thunk from "redux-thunk";

const store = createStore(
    rootReducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

const root = document.getElementById("root");

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </BrowserRouter>, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
