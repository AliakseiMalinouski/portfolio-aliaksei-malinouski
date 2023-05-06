import React from "react";
import {useForm} from 'react-hook-form';

export const Contacts = React.memo(() => {

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
            <h3>Contact</h3>
            <form action="#" onSubmit={handleSubmit(handleForm)}>
                <input type="text" placeholder="" {...register('userName', {
                    required: "This field is required",
                    minLength: {
                        value: 5,
                        message: 'Short'
                    }
                })}/>
                <div>
                    {errors?.userName && <p>{errors?.userName?.message || 'Error with user name'}</p>}
                </div>
                <input type="text" placeholder="" {...register('email', {
                    required: "This field is required",
                    minLength: {
                        value: 5,
                        message: 'Min 5 symbols'
                    }
                })}/><br/>
                <br/>
                <div>
                    {errors?.email && <p>{errors?.email?.message || 'Error'}</p>}
                </div>
                <textarea placeholder=""
                {...register('messageFromUser', {
                    required: "This field is required",
                    minLength: {
                        value: 10,
                        message: 'Min 10 sym'
                    }
                })}
                ></textarea><br/>
                <div>
                    {errors?.messageFromUser && <p>{errors?.messageFromUser?.message || 'Error textarea'}</p>}
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    )
})