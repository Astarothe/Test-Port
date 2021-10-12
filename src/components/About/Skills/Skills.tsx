import React from "react";
import {Title} from "../../../common/Title/Title";
import s from "./Skills.module.scss"
import react from "../../../assets/icons/react-icon.svg"
import redux from "../../../assets/icons/redux-icon.svg"
import javascript from "../../../assets/icons/javascript-icon.svg"
import typescript from "../../../assets/icons/typescript-icon.svg"
import html from "../../../assets/icons/html-icon.svg"
import css from "../../../assets/icons/css-icon.svg"
import restApi from "../../../assets/icons/rest-api-icon.svg"
import sass from "../../../assets/icons/sass-icon.svg"
import {Fade, Slide} from "react-awesome-reveal";

const skills = [
    {img: react, name: "React"},
    {img: redux, name: "Redux"},
    {img: restApi, name: "REST API"},
    {img: sass, name: "Sass"},
    {img: javascript, name: "JavaScript"},
    {img: typescript, name: "TypeScript"},
    {img: html, name: "HTML5"},
    {img: css, name: "CSS"},
]

export const Skills = () => {
    return (
        <div>
            <Title center={true}>My skills</Title>
            <ul className={s.list}>
                {skills.map((t, i) =>
                    <Fade key={i} className={s.wrapperFade} direction={"up"} fraction={0.1} triggerOnce={true}>
                        <Slide direction={"up"} fraction={0.1} triggerOnce={true} >
                            <li className={s.item}>
                                <div>
                                    <img src={t.img} alt={t.name}/>
                                </div>
                                <p>{t.name}</p>
                            </li>
                        </Slide>
                    </Fade>)}
            </ul>
        </div>
    )
}
