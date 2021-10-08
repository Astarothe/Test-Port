import s from "./Button.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import React, {FC} from "react";


export const Button:FC = ({children}) => {
    return (
        <a className={s.button} href="#">
            <span>{children}</span>
            <span className={s.buttonIcon}>
                            <FontAwesomeIcon icon={faArrowRight} color={"white"} size={"1x"} className={s.icon}/>
            </span>
        </a>
    )
}
