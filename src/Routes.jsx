import React from 'react'
import Login from './Components/Login/Login.jsx'
import FormRegister from './Components/FormRegister/FormRegister.jsx'
import MainPage from './UI/Pages/MainPage.jsx';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/Login" component={Login} />
                <Route path="/FormRegister" component={FormRegister} />
                <Route path="/MainPage" component={MainPage} />

            </Switch>
        </Router>
    )
} 

