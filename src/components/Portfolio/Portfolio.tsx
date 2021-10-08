import React from "react";
import {Header} from "../../common/Header/Header";
import s from "./Portfolio.module.scss"
import todolists from "../../assets/image/todolists.png"
import sedona from "../../assets/image/sedona.png"
import photoFilter from "../../assets/image/photo-filter.png"
import barbershop from "../../assets/image/barbershop.png"

export const Portfolio = () => {
    return (
        <>
            <Header title={"My"} subtitle={"Portfolio"} backTitle={"works"}/>
            <div className={s.portfolioWrapper}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <img src={todolists} alt="" width={"300px"} height={"300px"}/>
                    </li>
                    <li className={s.item}>
                        <img src={sedona} alt="" width={"300px"} height={"300px"}/>
                    </li>
                    <li className={s.item}>
                        <img src={photoFilter} alt="" width={"300px"} height={"300px"}/>
                    </li>
                    <li className={s.item}>
                        <img src={barbershop} alt="" width={"300px"} height={"300px"}/>
                    </li>
                </ul>
            </div>
        </>
    )
}
