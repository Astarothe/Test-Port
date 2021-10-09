import React, {FC, useState} from "react";
import {NavLink} from "react-router-dom";
import s from "./Navigation.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons/faBriefcase";
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";

const navItem:NavItemType[] = [
    {
        title: "home",
        icon: faHome,
        path: "/home",
        id: 1,
    },
    {
        title: "about",
        icon: faUser,
        path: "/about",
        id: 2,
    },
    {
        title: "portfolio",
        icon: faBriefcase,
        path: "/portfolio",
        id: 3,
    },
    {
        title: "contact",
        icon: faEnvelopeOpen,
        path: "/contact",
        id: 4,
    },
]

export const Navigation: FC<NavigationProps> = ({homePage}) => {
    const [toggle, setToggle] = useState(false)
    const sizePage = homePage ? `${s.menuToggle}` : `${s.menuToggle} ${s.menuMain}`

    toggle ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    return (
        <nav>
            <div className={sizePage}>
                <input type="checkbox" checked={toggle} onChange={() => setToggle(!toggle)}/>
                <span></span>
                <span></span>
                <span></span>
                <ul className={s.linkList}>
                    {navItem.map(t => <li key={t.id}>
                        <NavLink to={t.path} activeClassName={s.active}>
                            <FontAwesomeIcon icon={t.icon} color={"white"} size={"sm"} className={s.iconMini}/>
                            <span className={s.title}>{t.title}</span>
                        </NavLink>
                    </li>)}
                </ul>
            </div>
            <div className={s.menu}>
                <ul className={s.menuList}>
                    {navItem.map(t => <li key={t.id}>
                        <NavLink to={t.path} activeClassName={s.active}>
                            <FontAwesomeIcon icon={t.icon} color={"white"} size={"1x"} className={s.icon}/>
                            <h2>{t.title}</h2>
                        </NavLink>
                    </li>)}
                </ul>
            </div>

        </nav>
    )
}

type NavigationProps = {
    homePage: boolean
}

type NavItemType = {
    title: string,
    icon: IconDefinition,
    path: string,
    id: number
}