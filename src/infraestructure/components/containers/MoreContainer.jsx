import React from 'react'
import Playlist from '../pure/moresection/playlist/Playlist'
import Gifts from '../pure/moresection/gifts/Gifts'
import DressCode from '../pure/moresection/dresscode/DressCode'
import Booking from '../pure/booking/Booking'

const MoreContainer = () => {
    return (
        <section className="more-container">
            <Gifts />
            <Playlist />
            <DressCode />
            <Booking />
        </section>
    )
}

export default MoreContainer
