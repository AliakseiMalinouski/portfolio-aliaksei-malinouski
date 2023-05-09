import React from "react";
import {useForm} from 'react-hook-form';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fieldContactFormVariant, buttonContactFormVariant } from "../motion variants/variants";
import {send} from 'emailjs-com';

export const Contacts = React.memo(() => {

    let {t} = useTranslation();

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
        send("service_isl7or8", "template_50gjqeh", data, "TEEd-8_0HXteJTfo6")
        .then(response => {
            console.log(JSON.stringify(response))
        })
        reset();
    }

    // comm

    return (
        <div className="Contacts">
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
        </div>
    )
})