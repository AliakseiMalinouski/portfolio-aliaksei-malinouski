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
    } = useForm();

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
                    required: "This field is required",
                    minLength: {
                        value: 5,
                        message: 'Short'
                    }
                })}/>
                <input type="text" style={{
                    border: errors?.email ? '1px solid red' : ''
                }} placeholder={errors?.email ? errors?.email?.message : t('placeholder-email')} {...register('email', {
                    required: "This field is required",
                    minLength: {
                        value: 5,
                        message: 'Min 5 symbols'
                    }
                })}/>
                <textarea style={{
                    border: errors?.messageFromUser ? '1px solid red' : ""
                }} placeholder={errors?.messageFromUser ? errors?.messageFromUser?.message : t('placeholder-message-user')} 
                {...register('messageFromUser', {
                    required: "This field is required",
                    minLength: {
                        value: 10,
                        message: 'Min 10 sym'
                    }
                })}
                ></textarea>
                <div>
                    {errors?.messageFromUser && <p>{errors?.messageFromUser?.message || 'Error textarea'}</p>}
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    )
})