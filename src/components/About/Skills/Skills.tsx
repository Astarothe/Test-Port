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
                {skills.map((t,i) =>
                    <Fade className={s.wrapperFade} delay={300} duration={1000} triggerOnce={true} >
                        <Slide className={s.wrapperSlide} delay={300} duration={1000} direction={ i % 2 === 0 ? "left" : "right"} triggerOnce={true}>
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
