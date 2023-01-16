import React, { useState } from 'react'
import MapsModal from '../mapsmodal/MapsModal'
import couple from '../../../../assets/icons/couple.png'
import './ceremony.css'
import Button from '../button/Button'
const Celebration = () => {
    const [modal, setModal] = useState(false)
    return (
        <div className="ceremony-container">
            <img
                srcSet={couple}
                alt="Sergio y Mica"
                className="ceremony-icon"
            />

            <h1 className="ceremony-title">CEREMONIA</h1>
            <div className="ceremony-day">
                <h1>Día</h1>
                <span className="line-break-ceremony"></span>
                <p>Sábado 18 de Febrero - 21:15hs</p>
            </div>
            <div className="ceremony-day">
                <h1>Lugar</h1>
                <span className="line-break-ceremony"></span>
                <p>Parroquia Nuestra Señora del Rosario</p>
            </div>
            <div className="ceremony-day">
                <h1>Dirección</h1>
                <span className="line-break-ceremony"></span>
                <p>J. T. Luque 127, Las Varillas</p>
                <Button text="¿Como llegar?" event={() => setModal(true)} />
            </div>
            {modal && (
                <MapsModal
                    setModal={setModal}
                    latit={-31.8699798692255}
                    leng={-62.71887317064093}
                    title="¿Como llegar a la ceremonia?"
                    link="https://goo.gl/maps/FAayUZrCUcNbGRFB8"
                />
            )}
        </div>
    )
}

export default Celebration
