import s from "./Button.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {FC} from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import { NavLink } from "react-router-dom";

type ButtonType = {
    icon: IconProp
    link?: string
    type?: "submit"
}

export const Button: FC<ButtonType> = ({icon, link, type, children}) => {
    const formButton = !!type
    return (
        <>
            {formButton
                ? <button type={type} className={s.button}>
                    <span>{children}</span>
                    <span className={s.buttonIcon}>
                            <FontAwesomeIcon icon={icon} color={"white"} size={"1x"} className={s.icon}/>
                    </span>
                </button>
                : <NavLink className={s.button} to={link || "#"}>
                    <span>{children}</span>
                    <span className={s.buttonIcon}>
                            <FontAwesomeIcon icon={icon} color={"white"} size={"1x"} className={s.icon}/>
                    </span>
                </NavLink>}

        </>
    )
}
