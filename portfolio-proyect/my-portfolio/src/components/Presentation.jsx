import React from "react";
import danielPhoto from '../assets/devdaniel-photo.jpeg';
import Typewriter from 'typewriter-effect'
import { DownloadButton } from "./DownloadButton";

export function Presentation() {


    return (
        <>
            <section id="presentation" className="presentation">
                <div className="presentation-content">
                    <div className="content">
                        <h1>Hi, I am</h1>
                        <h1 className="typewriter"><Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('Daniel Sanabria')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString('Full Stack Dev')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .start()
                            }}
                            options={{
                                loop: true
                            }}

                        /></h1>
                    </div>
                    {/* DOWNLOAD CV */}
                    <div className="button-cv">
                        <DownloadButton/>
                    </div>
                    
                    {/* perfil image */}
                    <div className='content-photo'>
                        <img src={danielPhoto} alt="personal-photo" />
                    </div>
                </div>
            </section>
        </>
    )
}