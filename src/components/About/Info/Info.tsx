import React from "react";
import {Title} from "../../../common/Title/Title";
import s from "./Info.module.scss";
import {Button} from "../../../common/Button/Button";
import codewars from "../../../assets/icons/codewars-icon.svg"
import github from "../../../assets/icons/github-icon.svg"
import {faDownload} from "@fortawesome/free-solid-svg-icons/faDownload";


const info: InfoType [] = [
    {
        title: "First name :",
        value: "Michel",
        id: 1,
    },
    {
        title: "Last name :",
        value: "Savich",
        id: 2,
    },
    {
        title: "Age :",
        value: "23 Years",
        id: 3,
    },
    {
        title: "Nationality :",
        value: "Belorussian",
        id: 4,
    },
]
const info2: InfoType [] = [
    {
        title: "Location :",
        value: "Belarus",
        id: 1,
    },
    {
        title: "Address :",
        value: "Novopolock",
        id: 2,
    },
    {
        title: "Phone :",
        value: "+375295956879",
        id: 3,
    },
    {
        title: "Telegram :",
        value: "Astarothqq",
        id: 4,
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
                            info.map(t => <li key={t.id} className={s.infoItem}>
                                <span className={s.title}>{t.title} </span>
                                <span className={s.value}>{t.value}</span>
                            </li>)
                        }

                    </ul>
                    <ul className={s.infoList}>
                        {
                            info2.map(t => <li key={t.id} className={s.infoItem}>
                                <span className={s.title}>{t.title} </span>
                                <span className={s.value}>{t.value}</span>
                            </li>)
                        }
                    </ul>
                </div>
                <Button icon={faDownload}>Download cv</Button>
            </div>
            <div className={s.links}>
                <ul>
                    <li>
                        <a href="https://www.codewars.com/users/Astarothe">
                            <img src={codewars} alt="codewars"/>
                            <p>CodeWars</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Astarothe">
                            <img src={github} alt="github"/>
                            <p>GitHub</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

type InfoType = {
    title: string
    value: string
    id: number
}