import React, { useState } from 'react'
import copyPng from "../assets/copy.png"
import linkedinPng from "../assets/linkedin-logo.png"
import githubPng from "../assets/github-logo.png"
import { ContactForm } from './ContactForm'

export const Contact = (props) => {

    const [copied, setCopied] = useState(false)

    const handleClickButton = () => {
        navigator.clipboard.writeText(props.email)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch((err) => {
                alert('Error copying text', err);
            });
    };

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
                            {/* if true, will show thw message */}
                            {copied && <span className="copied-message">Copied!</span>}
                        </p>
                    </div>

                </div>
                <ContactForm/>
            </section>
        </>
    )
}
