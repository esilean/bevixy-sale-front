import "regenerator-runtime/runtime"

import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import Routes from './main/routes'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const saga = createSagaMiddleware()
const store = applyMiddleware(multi, thunk, promise, saga)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <h1>Hello BEVIXY</h1>
    </Provider>
    , document.getElementById('app'))
