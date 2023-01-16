import React, { useState } from 'react'
import Button from '../../button/Button'
import dressCode from '../../../../../assets/icons/dresscode.png'
import wave from '../../../../../assets/images/card-wave.png'
import DressCodeModal from './DressCodeModal'

const DressCode = () => {
    const [modal, setModal] = useState(false)
    return (
        <section className="gifts-container">
            <img srcSet={dressCode} alt="" className="booking-icon" />
            <p className="gift-title">DRESS CODE</p>
            <p className="gift-p">Una orientación para tu vestuario</p>
            <Button text="Ver Más" event={() => setModal(true)} />
            {modal && <DressCodeModal setModal={setModal} />}{' '}
            <img srcSet={wave} alt=" " className="card-wave" />
        </section>
    )
}

export default DressCode
