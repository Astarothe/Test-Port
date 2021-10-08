import s from "./Header.module.scss";
import {Navigation} from "../Navigation/Navigation";
import React, {FC} from "react";

type HeaderType = {
    title: string
    subtitle: string
    backTitle: string
}

export const Header:FC<HeaderType> = ({title,subtitle, backTitle}) => {
    return (
        <header className={s.header}>
            <h1>{title} <span>{subtitle}</span></h1>
            <span className={s.titleBg}>{backTitle}</span>
            <Navigation homePage={false}/>
        </header>
    )
}
