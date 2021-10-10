import React, {useEffect} from "react";
import {Header} from "../../common/Header/Header";
import s from "./Portfolio.module.scss"
import {Project} from "./Project/Project";
import {useSelector} from "react-redux";
import {AppType} from "../../bll/store";
import {PortfolioState} from "../../bll/PortfolioReducer";

export const Portfolio = () => {
    const projects = useSelector<AppType, PortfolioState[]>(state => state.portfolio)
    const allProjects = projects.map(t => <Project title={t.title}
                                                   link={t.link}
                                                   backgroundImg={t.backgroundImg}
                                                   description={t.description}/>)

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

