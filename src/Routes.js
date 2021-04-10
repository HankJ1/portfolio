import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Homepage2 from './components/Homepage2'
import Header from './components/Header';
import Catalogue from './components/Catalogue';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

const Routes = () => {

    return (
        <div >
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Header  />
                <Switch>
                    <Route exact path='/' component={Homepage2} />
                    <Route exact path='/projects' component={Catalogue} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;