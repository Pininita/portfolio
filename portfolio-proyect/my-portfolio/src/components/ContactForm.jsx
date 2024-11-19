import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

export const ContactForm = () => {
    const [state, handleSubmit] = useForm("mvgoqkve");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form className='contact-form' onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:
            </label>
            <input
                id="name"
                type="text"
                name="name"
                required
            />
            <label htmlFor="email">
                Email:
            </label>
            <input
                id="email"
                type="email"
                name="email"
                required
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message">
                Message:
            </label>
            <textarea
                id="message"
                name="message"
                required
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button className='contact-button' type="submit" disabled={state.submitting}>
                Submit
            </button>

        </form>
    );
}
