import React, { useMemo } from 'react'
import { REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY } from '../../../../config/globals'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import './maps.css'
import Button from '../button/Button'
import mapsIcon from '../../../../assets/icons/maps-icon.png'
import close from '../../../../assets/icons/close.png'

const MapsModal = ({ setModal, latit, leng, title, link }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
    })

    const center = useMemo(() => ({ lat: latit, lng: leng }), [latit, leng])
    return (
        <div className="modal-background">
            {!isLoaded ? (
                <div>Loading...</div>
            ) : (
                <div className="modal-container">
                    <img
                        className="modal-close-icon"
                        srcSet={close}
                        alt=""
                        onClick={() => setModal(false)}
                    />

                    <div className="circle-div">
                        <img srcSet={mapsIcon} alt="Sergio y Mica" />
                    </div>
                    <p className="how-to-get">{title}</p>
                    <GoogleMap
                        zoom={16}
                        center={center}
                        mapContainerClassName="maps"
                    >
                        <MarkerF position={center} />
                    </GoogleMap>
                    <Button text="Ampliar mapa" link={link} />
                </div>
            )}
        </div>
    )
}

export default MapsModal
