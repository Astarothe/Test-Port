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
import github from "../../../assets/icons/github-icon.svg"
import sass from "../../../assets/icons/sass-icon.svg"
import jest from "../../../assets/icons/jest-icon.svg"

export const Skills = () => {
    return (
        <div>
            <Title center={true}>My skills</Title>
            <ul className={s.list}>
                <li className={s.item}>
                    <img src={react} alt=""/>
                    <p>React</p>
                </li>
                <li className={s.item}>
                    <img src={redux} alt=""/>
                    <p>Redux</p>
                </li>
                <li className={s.item}>
                    <img src={javascript} alt=""/>
                    <p>JavaScript</p>
                </li>
                <li className={s.item}>
                    <img src={typescript} alt=""/>
                    <p>TypeScript</p>
                </li>
                <li className={s.item}>
                    <img src={restApi} alt=""/>
                    <p>REST API</p>
                </li>
                <li className={s.item}>
                    <img src={sass} alt=""/>
                    <p>Sass </p>
                </li>

                <li className={s.item}>
                    <img src={html} alt=""/>
                    <p>HTML5</p>
                </li>
                <li className={s.item}>
                    <img src={css} alt=""/>
                    <p>CSS</p>
                </li>


            </ul>
        </div>
    )
}
