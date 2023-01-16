import React from 'react'
import dresscode from '../../../../../assets/icons/dresscode.png'
import close from '../../../../../assets/icons/close.png'
import './dresscode.css'
const DressCodeModal = ({ setModal }) => {
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
                        srcSet={dresscode}
                        alt="Sergio y Mica"
                        className="playlist-modal-img"
                    />
                </div>
                <p className="playlist-modal-title">DRESS CODE</p>

                <div className="prices-container">
                    <p className="dress-code-modal-body">
                        Lo más importante para nosotros es que estes cómodo/a y
                        disfrutes de una noche inolvidable
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DressCodeModal
