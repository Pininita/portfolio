import React from "react";
import danielPhoto from '../assets/devdaniel-photo.jpeg';


export function Presentation() {
    return (
        <>
            <section id="presentation" className="presentation">
                <div className="presentation-content">
                    <div className="content">
                        <h1>Hi, I am Daniel Sanabria</h1>
                        <p>Full stack developer</p>
                    </div>

                    <div className='content-photo'>
                        <img src={danielPhoto} alt="personal-photo" />
                    </div>
                </div>
            </section>
        </>
    )
}