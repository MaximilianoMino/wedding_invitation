import React from 'react'
import './gifts.css'
import giftBox from '../../../../../assets/icons/gift-box.png'
/* import giftBoxGif from '../../../../../assets/gif/gift-box.gif'
 */
import honeymoon from '../../../../../assets/icons/luna-de-miel.png'
import wave from '../../../../../assets/images/card-wave.png'

const Gifts = () => {
    return (
        <section className="gifts-container">
            <img srcSet={giftBox} alt="" className="booking-icon" />
            <p className="gift-title">REGALOS</p>
            <p className="gift-p">
                Nuestro mejor regalo es su presencia, pero si desean colaborar
                con nuestra
                <p className="gift-lunademiel">
                    LUNA DE MIEL{' '}
                    <img
                        srcset={honeymoon}
                        alt=""
                        className="gift-plane-icon"
                    />
                </p>
                pueden hacernos sus presentes en la siguiente cuenta:
            </p>
            <p className="gift-modal-p">
                CBU: <span>0200364911000002127662</span>
            </p>
            <p className="gift-modal-p">
                ALIAS: <span>CELDA.DIENTE.POEMA</span>{' '}
            </p>

            <img srcSet={wave} alt=" " className="card-wave" />
        </section>
    )
}

export default Gifts
