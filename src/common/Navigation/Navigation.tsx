import React, {FC, useState} from "react";
import {NavLink} from "react-router-dom";
import s from "./Navigation.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons/faBriefcase";
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";

type NavigationProps = {
    homePage: boolean
}

export const Navigation: FC<NavigationProps> = ({homePage}) => {
    const [toggle, setToggle] = useState(false)
    const currentPage = homePage ? `${s.menuToggle}` : `${s.menuToggle} ${s.menuMain}`


    toggle ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    return (
        <nav>
            <div className={currentPage}>
                <input type="checkbox" checked={toggle} onClick={() => setToggle(!toggle)}/>
                <span></span>
                <span></span>
                <span></span>
                <ul className={s.linkList}>
                    <li>
                        <NavLink to={"/"}>
                            <FontAwesomeIcon icon={faHome} color={"white"} size={"sm"} className={s.iconMini}/>
                            <span className={s.title}>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>
                            <FontAwesomeIcon icon={faUser} color={"white"} size={"sm"} className={s.iconMini}/>
                            <span className={s.title}>About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/portfolio"}>
                            <FontAwesomeIcon icon={faBriefcase} color={"white"} size={"sm"} className={s.iconMini}/>
                            <span className={s.title}>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>
                            <FontAwesomeIcon icon={faEnvelopeOpen} color={"white"} size={"sm"} className={s.iconMini}/>
                            <span className={s.title}>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={s.menu}>
                <ul className={s.menuList}>
                    <li>
                        <NavLink to={"/"}>
                            <FontAwesomeIcon icon={faHome} color={"white"} size={"1x"} className={s.icon}/>
                            <h2>Home</h2>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>
                            <FontAwesomeIcon icon={faUser} color={"white"} size={"1x"} className={s.icon}/>
                            <h2>About</h2>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/portfolio"}>
                            <FontAwesomeIcon icon={faBriefcase} color={"white"} size={"1x"} className={s.icon}/>
                            <h2>Portfolio</h2>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>
                            <FontAwesomeIcon icon={faEnvelopeOpen} color={"white"} size={"1x"} className={s.icon}/>
                            <h2>Contact</h2>
                        </NavLink>
                    </li>
                </ul>
            </div>

        </nav>
    )
}
