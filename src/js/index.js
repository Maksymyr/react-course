import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import {createStore, applyMiddleware, combineReducers} from 'redux';

import '../sass/common.scss';
import MainLayout from './containers/MainLayout.js';

function todos (state = {data: JSON.parse(localStorage.getItem("Tasks")) || []}, action) {
    let {payload, type, index} = action;
   
    switch(type) {
        case "ADD_TODO": {
            return {...state, data: [...state.data, payload]};
        }
        case "DELETE": {
            return { ...state, data: state.data.filter((item, i) => i != index) }
        }
        default: return state;
    }
}
const reducers = combineReducers({
    todos
}) 

const middleware = store => next => action => {
    next(action);
    localStorage.setItem("Tasks", JSON.stringify(store.getState().todos.data));
}

const store = createStore(reducers, applyMiddleware(middleware));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <MainLayout/>
        </Router>
    </Provider>
    ,document.getElementById("app"));


