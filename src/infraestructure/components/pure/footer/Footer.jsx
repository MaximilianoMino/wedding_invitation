import React from 'react'
import './footer.css'
import ring from '../../../../assets/icons/ring.png'
import wave from '../../../../assets/images/green-wave.png'

const Footer = () => {
    return (
        <footer className="footer-container">
            <img srcSet={wave} alt=" " className="green-wave" />

            <p className="footer-title">MICA&SERGIO</p>
            <img srcSet={ring} alt="" />
            <p className="footer-copy">
                Copyright ©2023. Developed by Maximiliano Miño.
            </p>
        </footer>
    )
}

export default Footer
