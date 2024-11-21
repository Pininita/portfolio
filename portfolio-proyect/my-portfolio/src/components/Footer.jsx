import React from 'react'
import greenArrow from '../assets/arrow.png'

export const Footer = () => {
    return (
        <>
            <footer className="App-footer">
                <p>&copy; {new Date().getFullYear()} Jorge Daniel Sanabria Soto. All rights reserved.</p>
                <a className='footer-arrow' href="#app">
                    <img src={greenArrow} alt="green-arrow" />
                </a>
            </footer>
        </>
    )
}
