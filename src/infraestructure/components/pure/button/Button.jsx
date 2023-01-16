import React from 'react'
import './button.css'

const Button = ({ text, event, link }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <button type="submit" className="btn" onClick={event && event}>
                {text}
            </button>
        </a>
    )
}

export default Button
