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

export const Skills = () => {
    return (
        <div>
            <Title center={true}>My skills</Title>
            <ul className={s.list}>
                <li className={s.item}>
                    <div>
                        <img src={react} alt=""/>
                    </div>

                    <p>React</p>
                </li>
                <li className={s.item}>
                    <div>
                        <img src={redux} alt=""/>
                    </div>

                    <p>Redux</p>
                </li>
                <li className={s.item}>
                    <div>
                        <img src={restApi} alt=""/>
                    </div>

                    <p>REST API</p>
                </li>
                <li className={s.item}>
                    <div>
                        <img src={sass} alt=""/>
                    </div>

                    <p>Sass </p>
                </li>
                <li className={s.item}>
                    <div>
                        <img src={javascript} alt=""/>
                    </div>
                    <p>JavaScript</p>
                </li>
                <li className={s.item}>
                    <div>
                        <img src={typescript} alt=""/>
                    </div>
                    <p>TypeScript</p>
                </li>


                <li className={s.item}>
                    <div>
                        <img src={html} alt=""/>
                    </div>

                    <p>HTML5</p>
                </li>
                <li className={s.item}>
                    <div>
                        <img src={css} alt=""/>
                    </div>

                    <p>CSS</p>
                </li>


            </ul>
        </div>
    )
}
