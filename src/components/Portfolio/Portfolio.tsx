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
    const allProjects = projects.map((t,i) => <Fade delay={700 * i} duration={1500} triggerOnce={true}
                                                 className={s.animateWrapper}>
            <Slide delay={ i <= 3 ? 700 * i : 700 * (i + 3) / 2 } direction={"up"} duration={1500} className={s.animate} triggerOnce={true} >

                <Project title={t.title}
                         link={t.link}
                         backgroundImg={t.backgroundImg}
                         description={t.description}/>
            </Slide>
        </Fade>
    )

    return (
        <>
            <Header title={"My"} subtitle={"Portfolio"} backTitle={"works"}/>
            <Fade delay={700} duration={1500} triggerOnce={true}>
                <Slide delay={700} direction={"up"} duration={1500} className={s.slide} triggerOnce={true}>
                    <div className={s.portfolioWrapper}>
                        <ul className={s.list}>
                            {allProjects}
                        </ul>
                    </div>
                </Slide>
            </Fade>
        </>
    )
}

