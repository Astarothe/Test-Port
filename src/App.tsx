import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Home} from './components/Home/Home';
import {About} from './components/About/About';
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Contact} from "./components/Contact/Contact";
import s from "./App.module.scss";


function App() {
    return (
            <Switch>
                <Route path={"/about"}><About/></Route>
                <Route path={"/portfolio"}><Portfolio/></Route>
                <Route path={"/contact"}><Contact/></Route>
                <Route exact path={"/home"}><Home/></Route>
                <Redirect to={"/home"} />
            </Switch>
    );
}

export default App;
