import React from 'react'
import copyPng from "../assets/copy.png"
import linkedinPng from "../assets/linkedin-logo.png"
import githubPng from "../assets/github-logo.png"

export const Contact = (props) => {

    const handleClickButton = () => {
        navigator.clipboard.writeText(props.email)
            .then(() => {
                alert('email copied')
            })
            .catch((err) => {
                alert('Error copying text', err)
            })
    }

    return (
        <>
            <section id="contact" className="contact">
                <div className='contact-me'>
                    <h2 className='contact-title'>Contact me</h2>
                    <p>Feel free to send me a text message if you'd like.</p>
                    <div className="social-media">
                        <a className='logo' href="https://www.linkedin.com/in/jorge-daniel-sanabria-soto-aa77362b8/"><img src={linkedinPng} alt="linkedin-logo"/></a>
                        <a className='logo' href="https://github.com/Pininita"><img src={githubPng} alt="github-logo"/></a>
                    </div>
                    <div className="location">
                        <h4>Location:</h4>
                        <p>{props.location}</p>
                    </div>
                    <div className="phone-number">
                        <h4>Phone:</h4>
                        <p>{props.phone}</p>
                    </div>
                    <div className="email">
                        <h4>Email:</h4>
                        <p>
                            {props.email}
                            <button className='copy-button' onClick={handleClickButton}>
                                <img src={copyPng} alt="copy-png" />
                            </button>
                        </p>
                    </div>

                </div>
                <form className='contact-form'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Send</button>
                </form>
            </section>
        </>
    )
}
