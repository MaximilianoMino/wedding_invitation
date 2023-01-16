import React, { useEffect, useState, useMemo } from 'react'
import { Howl } from 'howler'
import musicOff from '../../../../assets/icons/music_off.png'
import music from '../../../../assets/icons/music.png'
import mp4 from '../../../../assets/audio/song.mp3'
import './audio.css'
const Audio = () => {
    const [musicOn, setMusicOn] = useState(false)
    const [audioId, setAudioId] = useState(0)
    const sound = useMemo(
        () =>
            new Howl({
                src: [mp4],
                html5: true,
                preload: true,
            }),
        []
    )

    const handleAudio = () => {
        let id
        if (musicOn) {
            sound.pause(audioId)
            setMusicOn(false)
        } else {
            setMusicOn(true)
            id = sound.play()
            setAudioId(id)
        }
    }
    /*     useEffect(() => {
        
    }, [musicOn, sound])
 */
    console.log(audioId)

    return (
        <>
            <div className="audio-container" onClick={() => handleAudio()}>
                {musicOn ? (
                    <img srcSet={music} alt="" />
                ) : (
                    <img srcSet={musicOff} alt="" />
                )}
            </div>
        </>
    )
}
export default Audio
