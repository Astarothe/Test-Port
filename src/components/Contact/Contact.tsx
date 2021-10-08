import React from "react";
import {Header} from "../../common/Header/Header";
import {Title} from "../../common/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from "./Contact.module.scss";
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";
import {Button} from "../../common/Button/Button";
import {Input} from "../../common/Input/Input";
import telegram from "../../assets/icons/telegram-icon.svg"
import linkedin from "../../assets/icons/linkedin-icon.svg"
import {faPhoneSquareAlt} from "@fortawesome/free-solid-svg-icons/faPhoneSquareAlt";

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
                        minatosavich@gmail.com
                    </p>
                    <p className={s.connect}>
                        <FontAwesomeIcon icon={faPhoneSquareAlt} color={"white"} size={"sm"} className={s.iconTelephone}/>
                        <span>Call me</span>
                        +37529 595 68 79
                    </p>
                    <ul className={s.listLink}>
                        <li className={`${s.item} ${s.telegram}`}>
                            <a href="#">
                                <img src={telegram} alt=""/>
                            </a>
                        </li>
                        <li className={`${s.item} ${s.linkedin}`}>
                            <a href="#">
                                <img src={linkedin} alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={s.formWrapper}>
                    <form action="">
                        <Input type={"text"} name={"name"} placeholder={"your name"}/>
                        <Input type={"email"} name={"email"} placeholder={"your email"}/>
                        <Input type={"text"} name={"subject"} placeholder={"your subject"}/>
                        <textarea placeholder={"your message"}/>
                        <Button>send message</Button>
                    </form>
                </div>

            </div>
        </>
    )
}
