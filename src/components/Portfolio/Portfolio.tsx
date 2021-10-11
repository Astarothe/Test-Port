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
        <Fade delay={i > 1 ? 1000 : 1000 + ((i + 1) * 100)}
              duration={i > 1 ? 1000 : 1000 + ((i + 1) * 100)}
              triggerOnce={true}
              className={s.animateWrapper}
              key={i}>
            <Slide delay={i > 1 ? 1000 : 1000 }
                   direction={"up"}
                   triggerOnce={true}
                   duration={i > 1 ? 1000 : 1000 * (i + 1 )}
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
            <div className={s.portfolioWrapper}>
                <ul className={s.list}>
                    {allProjects}
                </ul>
            </div>
        </>
    )
}
//
// <Fade delay={i < 2 ? 2000 * i : 500 * (i / 10)} duration={i < 2 ? 2000 * i : 1000} triggerOnce={true}
//
//       className={s.animateWrapper}
//       key={i}>

// <Slide delay={i < 2 ? 2000 * i : 500 * (i / 10)}
// fraction={1}
// direction={"up"}
// triggerOnce={true}
//        duration={i < 2 ? 2000 * i : 1000}
//        className={s.animate}>