import React, {useEffect} from "react";
import {Header} from "../../common/Header/Header";
import {Title} from "../../common/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from "./Contact.module.scss";
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";
import telegram from "../../assets/icons/telegrams-icon.svg";
import linkedin from "../../assets/icons/linkedin-icon.svg";
import {faPhoneSquareAlt} from "@fortawesome/free-solid-svg-icons/faPhoneSquareAlt";
import {Form} from "./Form/Form";


export const Contact = () => {
    return (
        <>
            <Header title={"Get in"} subtitle={"touch"} backTitle={"contact"}/>
            <div className={s.contactWrapper}>
                <div className={s.contactInfo}>
                    <Title>Don't be shy !</Title>
                    <p className={s.description}>Feel free to get in touch with me.
                        I am always open to discussing new projects,
                        creative ideas or opportunities to be part of your visions.</p>
                    <p className={s.connect}>
                        <FontAwesomeIcon icon={faEnvelopeOpen} color={"white"} size={"sm"} className={s.iconMail}/>
                        <span>Mail me</span>
                        <a href={"mailto:minatosavich@gmail.com"} target={"_blank"}>minatosavich@gmail.com</a>
                    </p>
                    <p className={s.connect}>
                        <FontAwesomeIcon icon={faPhoneSquareAlt} color={"white"} size={"sm"}
                                         className={s.iconTelephone}/>
                        <span>Call me</span>
                        <a href="tel:+375295956879" target={"_blank"}> +37529 595 68 79</a>
                    </p>
                    <ul className={s.listLink}>
                        <li className={`${s.item} ${s.telegram}`}>
                            <a href="https://telegram.me/Astarothqq" target={"_blank"}>
                                <img src={telegram} alt=""/>
                            </a>
                        </li>
                        <li className={`${s.item} ${s.linkedin}`}>
                            <a href="https://linkedin.com/in/michel-savich" target={"_blank"}>
                                <img src={linkedin} alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
                <Form/>
            </div>

        </>
    )
}
