import React, { useState } from 'react'
import MapsModal from '../mapsmodal/MapsModal'
import cheers from '../../../../assets/icons/cheers.png'
/* import cheering from '../../../../assets/gif/cheering.gif'
 */
import '../celebration/ceremony.css'
import Button from '../button/Button'
const Party = () => {
    const [modal, setModal] = useState(false)

    return (
        <div className="ceremony-container">
            <img
                srcSet={cheers}
                alt="Sergio y Mica"
                className="ceremony-icon"
            />

            <h1 className="ceremony-title">FIESTA</h1>
            <div className="ceremony-day">
                <h1>Día</h1>
                <span className="line-break-ceremony"></span>
                <p>Sábado 18 de Febrero - 22:00hs</p>
            </div>
            <div className="ceremony-day">
                <h1>Lugar</h1>
                <span className="line-break-ceremony"></span>
                <p>La quinta eventos</p>
            </div>
            <div className="ceremony-day">
                <h1>Dirección</h1>
                <span className="line-break-ceremony"></span>
                <p>Martín Güemes 1180, Las Varillas</p>
                <Button text="¿Como llegar?" event={() => setModal(true)} />
            </div>

            {modal && (
                <MapsModal
                    setModal={setModal}
                    latit={-31.86066688468995}
                    leng={-62.71073001770418}
                    title="¿Como llegar a la fiesta?"
                    link="https://goo.gl/maps/oyoiXtRUQLzKuWRr6"
                />
            )}
        </div>
    )
}

export default Party
