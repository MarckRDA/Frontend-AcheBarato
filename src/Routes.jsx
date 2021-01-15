import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import React from 'react'
import Login from './Components/Login/Login.jsx'
import FormRegister from './Components/FormRegister/FormRegister.jsx'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from '../src/UI/Pages/NotFound/NotFound';
import MainPage from './UI/Pages/MainPage';
import Reports from './Components/Reports/Reports.jsx'

export default function Routes() {
    return (
        <Router>
            <Switch>
                
                <Route path="/Login" component={Login} />
                <Route path="/FormRegister" component={FormRegister} />
                <Route path="/Reports" component={Reports} />
                <Route path="/MainPage" component={MainPage} />
                
                


            </Switch>
        </Router>
    )
} 

