import React, { useState } from 'react'
import Button from '../../button/Button'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { emailService } from '../../../../../domain/services/email'
import dance from '../../../../../assets/icons/dance.png'
import close from '../../../../../assets/icons/close.png'

import './playlistmodal.css'

const PlaylistModal = ({ setModal }) => {
    const [successMsg, setSuccessMsg] = useState(false)
    const schema = yup.object().shape({
        name: yup
            .string()
            .required('Tenes que completar todos los campos')
            .min(1),
        song: yup
            .string()
            .required('Tenes que completar todos los campos')
            .min(1),
        author: yup
            .string()
            .required('Tenes que completar todos los campos')
            .min(1),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmitHandler = (data) => {
        if (data) {
            setTimeout(() => {
                setSuccessMsg(false)
            }, 1500)
            emailService({ data })
            setSuccessMsg(true)
        }

        reset()
    }

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
                        srcSet={dance}
                        alt="Sergio y Mica"
                        className="playlist-modal-img"
                    />
                </div>
                <p className="playlist-modal-title">PLAYLIST</p>
                <form
                    onSubmit={handleSubmit(onSubmitHandler)}
                    className="playlist-form"
                >
                    <input
                        {...register('name')}
                        type="text"
                        placeholder="Tu nombre.."
                        className="playlist-input"
                    />
                    {errors && (
                        <p className="playlist-error-input">
                            {errors.name?.message}
                        </p>
                    )}
                    <input
                        {...register('song')}
                        type="text"
                        placeholder="Canción.."
                        className="playlist-input"
                    />
                    <p className="playlist-error-input">
                        {errors.song?.message}
                    </p>{' '}
                    <input
                        {...register('author')}
                        type="text"
                        placeholder="Autor.."
                        className="playlist-input"
                    />
                    <p className="playlist-error-input">
                        {errors.author?.message}
                    </p>
                    {successMsg && (
                        <p className="playlist-success-input">
                            Sugerencia recibida!
                        </p>
                    )}
                    <Button text="Enviar Sugerencia" />
                </form>
            </div>
        </div>
    )
}

export default PlaylistModal
