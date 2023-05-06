import React from "react";
import {useForm} from 'react-hook-form';
import { useTranslation } from "react-i18next";

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
        console.log(JSON.stringify(data));
        reset();
    }

    return (
        <div className="Contacts">
            <form action="#" onSubmit={handleSubmit(handleForm)}>
                <input type="text" style={{
                    border: errors?.userName ? '1px solid red' : ""
                }} placeholder={errors?.userName ? errors?.userName?.message : t('placeholder-name')} {...register('userName', {
                    required: t("required-field"),
                    minLength: {
                        value: 3,
                        message: t("error-message-form-input-name")
                    }
                })}/>
                <p className="AlertAboutErrorInput">{errors?.userName && <span>{errors?.userName?.message}</span>}</p>
                <input type="text" style={{
                    border: errors?.email ? '1px solid red' : ''
                }} placeholder={errors?.email ? errors?.email?.message : t('placeholder-email')} {...register('email', {
                    required: t("required-field"),
                    minLength: {
                        value: 15,
                        message: t("error-message-form-input-email")
                    }
                })}/>
                <p className="AlertAboutErrorInput">{errors?.email && <span>{errors?.email?.message}</span>}</p>
                <textarea style={{
                    border: errors?.messageFromUser ? '1px solid red' : ""
                }} placeholder={errors?.messageFromUser ? errors?.messageFromUser?.message : t('placeholder-message-user')} 
                {...register('messageFromUser', {
                    required: t("required-field"),
                    minLength: {
                        value: 10,
                        message: t("error-message-form-input-message")
                    }
                })}
                ></textarea>
                <p className="AlertAboutErrorTextArea">{errors?.messageFromUser && <span>{errors?.messageFromUser?.message}</span>}</p>
                <button type="submit" className="SubmitFormButton" style={{
                    opacity: !isValid ? '0.6' : "1"
                }} disabled={!isValid}>Send</button>
            </form>
        </div>
    )
})