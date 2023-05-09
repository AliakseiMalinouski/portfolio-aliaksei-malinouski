import React from "react";
import {useForm} from 'react-hook-form';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fieldContactFormVariant, buttonContactFormVariant, emailAddresVariant } from "../motion variants/variants";
import {send} from 'emailjs-com';
import { emailJsConfig } from "../emailjs-config";
import { Title } from "./Title";
import { useLocation } from "react-router-dom";

export const Contacts = React.memo(() => {

    let {t} = useTranslation();

    let location = useLocation();

    const {
        register,
        formState: {
            errors, isValid
        },
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    });

    const handleForm = (data) => {
        send(emailJsConfig.serviceId, emailJsConfig.templateId, data, emailJsConfig.publicKey)
        .then(response => {
            if(response.status === 200) {

            }
            else {
                alert("Error with post message to email");
            }
        })
        .catch(error => {
            alert(`Error with post data. Type error if ${error}`);
        })
        reset();
    }


    return (
        <div className="Contacts">
            <Title tag='h2' text="contact" content={t}/>
            <form action="#" onSubmit={handleSubmit(handleForm)}>
                <motion.input variants={fieldContactFormVariant} initial={'hidden'} whileInView={'visible'} viewport={{once: true}} custom={0.5} type="text" style={{
                    border: errors?.userName ? '1px solid red' : ""
                }} placeholder={errors?.userName ? errors?.userName?.message : t('placeholder-name')} {...register('userName', {
                    required: t("required-field"),
                    minLength: {
                        value: 3,
                        message: t("error-message-form-input-name")
                    }
                })}/>
                <p className="AlertAboutErrorInput">{errors?.userName && <span>{errors?.userName?.message}</span>}</p>
                <motion.input variants={fieldContactFormVariant} initial={'hidden'} whileInView={'visible'} viewport={{once: true}} custom={1} type="text" style={{
                    border: errors?.email ? '1px solid red' : ''
                }} placeholder={errors?.email ? errors?.email?.message : t('placeholder-email')} {...register('email', {
                    required: t("required-field"),
                    minLength: {
                        value: 15,
                        message: t("error-message-form-input-email")
                    }
                })}/>
                <p className="AlertAboutErrorInput">{errors?.email && <span>{errors?.email?.message}</span>}</p>
                <motion.textarea variants={fieldContactFormVariant} initial={'hidden'} whileInView={'visible'} viewport={{once: true}} custom={1.5} style={{
                    border: errors?.messageFromUser ? '1px solid red' : ""
                }} placeholder={errors?.messageFromUser ? errors?.messageFromUser?.message : t('placeholder-message-user')} 
                {...register('messageFromUser', {
                    required: t("required-field"),
                    minLength: {
                        value: 10,
                        message: t("error-message-form-input-message")
                    }
                })}
                ></motion.textarea>
                <p className="AlertAboutErrorTextArea">{errors?.messageFromUser && <span>{errors?.messageFromUser?.message}</span>}</p>
                <motion.button variants={buttonContactFormVariant} initial={'hidden'} whileInView={'visible'} viewport={{once: true}} custom={2} type="submit" className="SubmitFormButton" style={{
                    opacity: !isValid ? '0.6' : "1"
                }} disabled={!isValid}>Send</motion.button>
            </form>
            {
                location.pathname === '/contacts'
                ?
                <div className="EmailAdress">
                    <motion.h4 variants={emailAddresVariant} initial={'hidden'} animate={'visible'}>{t('my-email-addres-to-contact')} <img src="https://i.ibb.co/k4FHzvV/gmail-1.png" alt="Email"/></motion.h4>
                    <p>aleksymalinowski21@gmail.com</p>
                </div>
                :
                null
            }
        </div>
    )
})