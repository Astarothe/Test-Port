import s from "./Button.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {FC} from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

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
                : <a className={s.button} href={link || "#"}>
                    <span>{children}</span>
                    <span className={s.buttonIcon}>
                            <FontAwesomeIcon icon={icon} color={"white"} size={"1x"} className={s.icon}/>
                    </span>
                </a>}

        </>
    )
}
