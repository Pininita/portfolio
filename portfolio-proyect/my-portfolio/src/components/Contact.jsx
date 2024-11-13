import React from 'react'

export const Contact = () => {
    return (
        <>
            <section id="contact" className="contact">
                <h2>Contact me</h2>
                <form>
                    <label htmlFor="name">name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">send</button>
                </form>
            </section>
        </>
    )
}
