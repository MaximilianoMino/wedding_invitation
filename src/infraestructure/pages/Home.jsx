import React from 'react'
import Header from '../components/pure/header/Header'
import Contdown from '../components/pure/countdown/Countdown'
import PartyContainer from '../components/containers/PartyContainer'
import Portrait from '../components/pure/portrait/Portrait'
import Footer from '../components/pure/footer/Footer'
import MoreContainer from '../components/containers/MoreContainer'
import Audio from '../components/pure/audio/Audio'
import Hashtag from '../components/pure/hashtag/Hashtag'
import DontForget from '../components/pure/dontforget/DontForget'
import crossLine from '../../assets/images/crossline.png'

import './home.css'
const Home = () => {
    return (
        <>
            <Header />
            <Audio />
            <Contdown countdownTimestampMs={1676765700000} />
            <PartyContainer />
            <Portrait />
            <MoreContainer />
            <Hashtag />
            <Audio />
            <DontForget />
            <Footer />
        </>
    )
}

export default Home
