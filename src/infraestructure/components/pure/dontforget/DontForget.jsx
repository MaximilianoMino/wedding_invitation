import React from 'react'
import './dontforget.css'
import Button from '../button/Button'

const DontForget = () => {
    return (
        <section className="dontf-container">
            <p>No te olvides, es MUY importante que reserves tu lugar</p>
            <Button
                text="Confirmar Asistencia"
                link="https://walink.co/860ef9"
            />
        </section>
    )
}

export default DontForget
