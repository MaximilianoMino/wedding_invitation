import React from 'react'
import './portrait.css'
import pic1 from '../../../../assets/images/elisariveroph-104.jpg'
import pic2 from '../../../../assets/images/elisariveroph-237.jpg'
import pic4 from '../../../../assets/images/elisariveroph-42.jpg'
import pic5 from '../../../../assets/images/elisariveroph-459.jpg'
import pic8 from '../../../../assets/images/elisariveroph-617.jpg'
import pic10 from '../../../../assets/images/elisariveroph-749.jpg'
import pic11 from '../../../../assets/images/elisariveroph-78.jpg'
/* import camera from '../../../../assets/gif/camera.gif'
 */
const Portrait = () => {
    return (
        <section className="portrait-container">
            {/*             <img srcSet={camera} alt="" className="camera-gif" />
             */}
            <p className="portrait-title">RETRATOS DE NUESTRO AMOR</p>
            <p className="portrait-subtitle">
                Un minuto, un segundo, un instante que queda en la eternidad
            </p>

            <div className="portrait-img-container">
                <img srcSet={pic8} alt="" className="wide" />
                <img srcSet={pic4} alt="" className="tall" />
                <img srcSet={pic5} alt="" className="short" />
                <img srcSet={pic2} alt="" className="tall" />
                <img srcSet={pic1} alt="" className="short" />
                <img srcSet={pic10} alt="" className="short" />
                <img srcSet={pic11} alt="" className="short" />
                <img srcSet={pic5} alt="" className="wide" />
            </div>
        </section>
    )
}

export default Portrait
