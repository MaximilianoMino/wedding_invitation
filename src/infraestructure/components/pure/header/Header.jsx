import React from 'react'
import './header.css'
import downArrow from '../../../../assets/icons/down-arrow.png'
import headerImg from '../../../../assets/images/header.png'
import wave from '../../../../assets/images/wave.png'

const Header = () => {
    return (
        <header className="header-container">
            <img
                srcSet={headerImg}
                alt="SergioYMica header img"
                className="header-img"
            />
            <div className="wedding-date">
                <p className="year">2023</p>
                <p className="date-info">
                    SÁBADO | <span className="eighteen">18</span> | FEBRERO
                </p>
                <p className="this-is-us">SAVE THE DATE</p>
            </div>
            <div className="sergio-mica">
                <p>Mica & Sergio</p>
            </div>

            <div className="scroll-container">
                <a href="#countdown">
                    <p className="scroll-p">SCROLL</p>

                    <img
                        srcSet={downArrow}
                        alt="SergioyMica"
                        className="header-down-arrow"
                    />
                </a>
            </div>
            <img srcSet={wave} alt="" className="header-wave" />
        </header>
    )
}

export default Header
