import React, { useState } from 'react'
import dance from '../../../../../assets/icons/dance.png'
/* import musicNote from '../../../../../assets/gif/music-note.gif'
 */ import Button from '../../button/Button'
import PlaylistModal from './PlaylistModal'
import wave from '../../../../../assets/images/card-wave.png'

const Playlist = () => {
    const [modal, setModal] = useState(false)
    return (
        <section className="gifts-container">
            <img srcSet={dance} alt="" className="booking-icon" />
            <p className="gift-title">MÚSICA</p>
            <p className="gift-p">
                ¿Cuál es la canción que no debe faltar en la PlayList de la
                fiesta?
            </p>
            <Button text="Sugerir" event={() => setModal(true)} />
            {modal && <PlaylistModal setModal={setModal} />}
            <img srcSet={wave} alt=" " className="card-wave" />
        </section>
    )
}

export default Playlist
