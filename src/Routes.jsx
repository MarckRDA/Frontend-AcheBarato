import React from 'react'
import Login from './Components/Login/Login.jsx'
import FormRegister from './Components/FormRegister/FormRegister.jsx'
import PriceAverage from './Components/PriceAverage/PriceAverage.jsx';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Routes() {
    return (
        <Router>
            <Switch>
                
                <Route path="/Login" component={Login} />
                <Route path="/FormRegister" component={FormRegister} />
                <Route path="/PriceAverage" component={PriceAverage} />

            </Switch>
        </Router>
    )
} 

