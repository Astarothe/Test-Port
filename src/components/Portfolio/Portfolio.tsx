import React, {useEffect} from "react";
import {Header} from "../../common/Header/Header";
import s from "./Portfolio.module.scss"
import {Project} from "./Project/Project";
import {useSelector} from "react-redux";
import {AppType} from "../../bll/store";
import {PortfolioState} from "../../bll/PortfolioReducer";
import {Fade, Slide} from "react-awesome-reveal";

export const Portfolio = () => {
    const projects = useSelector<AppType, PortfolioState[]>(state => state.portfolio)
    const allProjects = projects.map((t, i) =>
        <Fade delay={500 * (i / 10)} duration={1000} triggerOnce={true} damping={i} className={s.animateWrapper} key={i}>
            <Slide delay={500 * (i / 10)} fraction={1} direction={"up"} triggerOnce={true} duration={1000} damping={i}
                   className={s.animate}>
                <Project
                    title={t.title}
                    link={t.link}
                    backgroundImg={t.backgroundImg}
                    description={t.description}/>
            </Slide>
        </Fade>
    )

    return (
        <>
            <Header title={"My"} subtitle={"Portfolio"} backTitle={"works"}/>
            <Slide delay={1000} direction={"up"} triggerOnce={true}>
                <div className={s.portfolioWrapper}>
                    <ul className={s.list}>
                        {allProjects}
                    </ul>
                </div>
            </Slide>
        </>
    )
}

