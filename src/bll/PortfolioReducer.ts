import {CSSProperties} from "react";
import sedona from "../assets/image/sedona.jpg";
import todolists from "../assets/image/todolists.png";
import shelter from "../assets/image/shelter.png";
import barbershop from "../assets/image/barbershop.png";
import photoFilter from "../assets/image/photo-filter.png";
import virtualPiano from "../assets/image/virtual-piano.png";


const initialState: PortfolioState[] = [
    {
        title: "Sedona",
        description: "html, css, js, less, gulp, mobile-first, adaptive, image(optimization retina display)",
        backgroundImg: {backgroundImage: `url(${sedona})`},
        link: {
            site: "https://astarothe.github.io/Sedona/index.html",
            code: "https://github.com/Astarothe/Sedona",
        },
    },
    {
        title: "Todolist",
        description: "html, css, js, less, gulp, mobile-first, adaptive, image(optimization retina display)",
        backgroundImg: {backgroundImage: `url(${todolists})`},
        link: {
            site: "https://astarothe.github.io/Todolists",
            code: "https://github.com/Astarothe/Todolists",
        },
    },
    {
        title: "Shelter",
        description: "html, css, js, less, gulp, mobile-first, adaptive, image(optimization retina display)",
        backgroundImg: {backgroundImage: `url(${shelter})`},
        link: {
            site: "https://rolling-scopes-school.github.io/astarothe-JS2020Q3/shelter/pages/main/index.html",
            code: "https://github.chttps://github.com/rolling-scopes-school/astarothe-JS2020Q3/tree/shelter/shelter",
        },
    },
    {
        title: "Barbershop",
        description: "html, css, js, less, gulp, mobile-first, adaptive, image(optimization retina display)",
        backgroundImg: {backgroundImage: `url(${barbershop})`},
        link: {
            site: "https://astarothe.github.io/Barbershop",
            code: "https://github.com/Astarothe/Barbershop",
        },
    },
    {
        title: "Photo-filter",
        description: "html, css, js, less, gulp, mobile-first, adaptive, image(optimization retina display)",
        backgroundImg: {backgroundImage: `url(${photoFilter})`},
        link: {
            site: "https://astarothe.github.io/Photo-filter",
            code: "https://github.com/Astarothe/Photo-filter",
        },
    },
    {
        title: "Virtual-piano",
        description: "html, css, js, less, gulp, mobile-first, adaptive, image(optimization retina display)",
        backgroundImg: {backgroundImage: `url(${virtualPiano})`},
        link: {
            site: "https://rolling-scopes-school.github.io/astarothe-JSFE2021Q1/virtual-piano/",
            code: "https://github.com/rolling-scopes-school/astarothe-JSFE2021Q1/tree/virtual-piano/virtual-piano",
        },
    },
]

export const portfolioReducer = (state: PortfolioState[] = initialState, action: any): PortfolioState[] => {
    switch (action.type) {
        default:
            return state;
    }
}


export type PortfolioState = {
    backgroundImg: CSSProperties | undefined
    link: {
        site: string
        code: string
    }
    title: string
    description: string
}