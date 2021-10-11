import React, {useEffect} from 'react';
import {Redirect, Route, useLocation} from "react-router-dom";
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
    const {pathname} = useLocation();
    useEffect(() => {

        setTimeout(() => {
            window.scrollTo(0, 0);
            // document.body.style.overflow = "hidden"
        }, 500)
        //
        //
        // setTimeout(() => {
        //     document.body.style.overflow = "auto"
        // }, 2000)
    }, [pathname]);

    if (pathname !== "/home" &&
        pathname !== "/about" &&
        pathname !== "/portfolio" &&
        pathname !== "/contact") {
        return <Redirect to={"/home"}/>
    }
    return (
        <>

            {routes.map(({path, Component}) => (
                <Route key={path} exact path={path}>
                    {({match}) => (
                        <CSSTransition
                            timeout={2000}
                            classNames={"page"}
                            unmountOnExit
                            in={match != null}>
                            <>
                                <div className={"page"}>
                                    <Component/>
                                </div>
                                <span className={"before"}></span>
                            </>
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