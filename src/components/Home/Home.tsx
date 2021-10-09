import React from "react";
import {Navigation} from "../../common/Navigation/Navigation";
import s from "./Home.module.scss";
import {Button} from "../../common/Button/Button";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";

export const Home = () => {
    return (
        <>
            <header>
                <Navigation homePage={true}/>
            </header>
            <section className={s.home}>
                <div className={s.backDesktop}></div>
                <div className={s.wrapper}>
                    <h1>I'm mishel savich.
                        <span>Front-end Developer</span>
                    </h1>
                    <p>
                        I'm a Belorussian based front‑end developer
                        focused on crafting clean & user‑friendly experiences.
                        I am passionate about building excellent software that improves the lives.
                    </p>
                   <Button icon={faArrowRight} link={"/about"}>more about me</Button>
                </div>
            </section>
        </>
    )
}
