import React from "react";

export function Header() {
    return (
        <>
            <header className="header">
                <nav>
                    <ul className='header-links'>
                        <li><a href="#about">About me</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact me</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}