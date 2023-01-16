import React, { useState } from 'react'
import booking from '../../../../assets/icons/booking.png'
import Button from '../button/Button'
import BookingModal from './BookingModal'
import wave from '../../../../assets/images/card-wave.png'

const Booking = () => {
    const [modal, setModal] = useState(false)

    return (
        <div className="gifts-container">
            <img
                srcSet={booking}
                alt="Sergio y Mica"
                className="booking-icon"
            />
            <h1 className="gift-title">RESERVA</h1>
            <p className="gift-p">
                El período para realizar la reserva finaliza el 10/02
            </p>
            <Button text="Ver Más" event={() => setModal(true)} />
            {modal && <BookingModal setModal={setModal} />}{' '}
            <img srcSet={wave} alt=" " className="card-wave" />
        </div>
    )
}

export default Booking
