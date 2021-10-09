import React from "react";
import {Header} from "../../common/Header/Header";
import s from "./Portfolio.module.scss"
import todolists from "../../assets/image/todolists.png"
import sedona from "../../assets/image/sedona.jpg"
import photoFilter from "../../assets/image/photo-filter.png"
import barbershop from "../../assets/image/barbershop.png"
import virtualPiano from "../../assets/image/virtual-piano.png"
import shelter from "../../assets/image/shelter.png"


export const Portfolio = () => {
    const items = {backgroundImage: `url(${sedona})`}
    const items1 = {backgroundImage: `url(${photoFilter})`}
    const items2 = {backgroundImage: `url(${shelter})`}
    return (
        <>
            <Header title={"My"} subtitle={"Portfolio"} backTitle={"works"}/>
            <div className={s.portfolioWrapper}>
                <ul className={s.list}>
                    <li className={s.item} >
                        <figure style={items}>
                            {/*<img src={todolists} alt=""/>*/}
                        </figure>
                    </li>
                    <li className={s.item}>
                        <figure style={items1}>
                            {/*<img src={sedona} alt=""/>*/}
                        </figure>
                    </li>
                    <li className={s.item}>
                        <figure style={items2}>
                            {/*<img src={photoFilter} alt=""/>*/}
                        </figure>
                    </li>
                    <li className={s.item}>
                        <figure>
                            {/*<img src={barbershop} alt=""/>*/}
                        </figure>
                    </li>
                    <li className={s.item}>
                        <figure>
                            {/*<img src={virtualPiano} alt=""/>*/}
                        </figure>

                    </li>
                    <li className={s.item}>
                        <figure>
                            {/*<img src={shelter} alt=""/>*/}
                        </figure>

                    </li>
                </ul>
            </div>
        </>
    )
}
