import React from 'react'
import './bookingmodal.css'
import Button from '../button/Button'
import booking from '../../../../assets/icons/booking.png'
import close from '../../../../assets/icons/close.png'

const BookingModal = ({ setModal }) => {
    return (
        <div className="modal-background">
            <div className="modal-container">
                <img
                    className="modal-close-icon"
                    srcSet={close}
                    alt=""
                    onClick={() => setModal(false)}
                />

                <div className="circle-div">
                    <img
                        srcSet={booking}
                        alt="Sergio y Mica"
                        className="playlist-modal-img"
                    />
                </div>
                <p className="playlist-modal-title">RESERVA</p>

                <div className="prices-container">
                    <p className="prices-text">
                        Mayores <span className="prices-number">$8500</span>
                    </p>

                    <p className="prices-text">
                        Menores(de 4 a 10)
                        <span className="prices-number">$3500</span>
                    </p>
                </div>

                <Button
                    text="Confirmar Asistencia"
                    link="https://walink.co/860ef9"
                />
            </div>
        </div>
    )
}

export default BookingModal
