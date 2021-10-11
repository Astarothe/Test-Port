import React from "react";
import s from "./About.module.scss"
import {Header} from "../../common/Header/Header";
import {Separator} from "../../common/Separator/Separator";
import {Info} from "./Info/Info";
import {Skills} from "./Skills/Skills";
import {Experience} from "./Experience/Experience";
import {Fade, Slide} from "react-awesome-reveal";

export const About = () => {
    return (
        <>
            <Header title={"About"} subtitle={"me"} backTitle={"Resume"}/>
            <div className={s.wrapper}>
                <Fade delay={700} duration={1500} triggerOnce={true}>
                    <Slide delay={700} direction={"up"} duration={1500} className={s.slide} triggerOnce={true}>
                        <Info/>
                    </Slide>
                </Fade>
                <Separator/>
                <Fade triggerOnce={true} direction={"up"} duration={2000}>
                    <Slide triggerOnce={true} direction={"up"}>
                        <Skills/>
                        <Separator/>
                    </Slide>
                </Fade>

                <Fade triggerOnce={true} direction={"up"} fraction={0} duration={500}>
                    <Slide triggerOnce={true} direction={"up"} fraction={0}>
                        <Experience/>
                    </Slide>
                </Fade>
            </div>
        </>
    )
}
