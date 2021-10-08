import React, {FC} from "react";
import s from "./Title.module.scss"

type TitleType = {
    center?: boolean
}

export const Title: FC<TitleType> = ({center, children}) => {
    const resultClass = center ? `${s.title} ${s.center}` : `${s.title}`
    return (
        <h3 className={resultClass}>{children}</h3>
    )
}
