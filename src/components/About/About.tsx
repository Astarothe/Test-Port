import React, {useEffect} from "react";
import s from "./About.module.scss"
import {Header} from "../../common/Header/Header";
import {Separator} from "../../common/Separator/Separator";
import {Info} from "./Info/Info";
import {Skills} from "./Skills/Skills";
import { Experience } from "./Experience/Experience";
import {useLocation} from "react-router-dom";

export const About = () => {
    return (
        <>
            <Header title={"About"} subtitle={"me"} backTitle={"Resume"}/>
            <div className={s.wrapper}>
                <Info/>
                <Separator/>
                <Skills/>
                <Separator/>
                <Experience/>
            </div>
        </>
    )
}
