import React from "react";
import {Title} from "../../../common/Title/Title";
import s from "./Experience.module.scss"
import {Education} from "./Education/Education";

export type EducationType = {
    year: string
    title: string
    subtitle: string
    description: string
}
const education: EducationType[] = [
    {
        year: "2021 - now",
        title: "Front-end / React developer",
        subtitle: "IT-Incubator",
        description: "Here I studied React, Redux, Typescript, Javascript, Axios, TDD approach, Material-UI, Formik",
    },
    {
        year: "2020 - 2020",
        title: "JavaScript / Front-end developer",
        subtitle: "The Rolling Scopes",
        description: "Here I studied Javascript Native, HTML, CSS, Git and GitHub"
    },
    {
        year: "2020 - 2020",
        title: "HTML and CSS. Adaptive layout and automation",
        subtitle: "HTML-Academy",
        description: "Here I studied Javascript Native, HTML, CSS, Git and GitHub"
    },
    {
        year: "2019 - 2020",
        title: "HTML and CSS. Professional website layout",
        subtitle: "HTML-Academy",
        description: "Here I studied Javascript Native, HTML, CSS, Git and GitHub"
    }
]

export const Experience = () => {
    return (
        <div>
            <Title center={true}>experience & education</Title>
            <ul className={s.list}>
                {education.map((t, i) =>
                    <Education key={i} year={t.year} title={t.title}
                               subtitle={t.subtitle}
                               description={t.description}/>)}
            </ul>
        </div>
    )
}
