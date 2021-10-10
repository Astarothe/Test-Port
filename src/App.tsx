import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Home} from './components/Home/Home';
import {About} from './components/About/About';
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Contact} from "./components/Contact/Contact";
import "./App.scss";
import {CSSTransition} from "react-transition-group";


function App() {
    const routes = [
        {path: "/home", Component: Home},
        {path: "/about", Component: About},
        {path: "/portfolio", Component: Portfolio},
        {path: "/contact", Component: Contact},
    ]

    return (
        <>
            {routes.map(({path, Component}) => (
                <Route key={path} exact path={path}>
                    {({match}) => (
                        <CSSTransition
                            timeout={2000}
                            classNames={"page"}
                            unmountOnExit
                            in={match != null}
                        >
                            <div className={"page"}>
                                <Component/>
                            </div>
                        </CSSTransition>
                    )}
                </Route>
            ))}


        </>

    );
}

export default App;
//
// <Switch>
//     <Route path={"/about"}><About/></Route>
//     <Route path={"/portfolio"}><Portfolio/></Route>
//     <Route path={"/contact"}><Contact/></Route>
//     <Route exact path={"/home"}><Home/></Route>
//     <Redirect to={"/home"} />
// </Switch>