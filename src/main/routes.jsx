import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

export default props => (
    <Router history={hashHistory}>
        <Redirect from='*' to='/' />
    </Router>
)