import React from "react";
import {Title} from "../../../common/Title/Title";
import s from "./Info.module.scss";
import {Button} from "../../../common/Button/Button";
import codewars from "../../../assets/icons/codewars-icon.svg"
import github from "../../../assets/icons/github-icon.svg"

const info = [
    {
        title: "First name :",
        value: "Michel"
    },
    {
        title: "Last name :",
        value: "Savich"
    },
    {
        title: "Age :",
        value: "23 Years"
    },
    {
        title: "Nationality :",
        value: "Belorussian"
    },
]
const info2 = [
    {
        title: "Location :",
        value: "Belarus"
    },
    {
        title: "Address :",
        value: "Novopolock"
    },
    {
        title: "Phone :",
        value: "+375295956879"
    },
    {
        title: "Telegram :",
        value: "Astarothqq"
    },
]

export const Info = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.infoSection}>
                <Title>Personal infos</Title>
                <div className={s.infoWrapper}>
                    <ul className={s.infoList}>
                        {
                            info.map(t => <li className={s.infoItem}>
                                <span className={s.title}>{t.title} </span>
                                <span className={s.value}>{t.value}</span>
                            </li>)
                        }

                    </ul>
                    <ul className={s.infoList}>
                        {
                            info2.map(t => <li className={s.infoItem}>
                                <span className={s.title}>{t.title} </span>
                                <span className={s.value}>{t.value}</span>
                            </li>)
                        }
                    </ul>
                </div>
                <Button>Download cv</Button>
            </div>
            <div className={s.links}>
                <ul>
                    <li>
                        <a href="#">
                            <img src={codewars} alt=""/>
                            <p>CodeWars</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={github} alt=""/>
                            <p>GitHub</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
