import { useState, useEffect } from 'react'
import './countdown.css'
import { getRemainingTimeUntilMsTimestamp } from './utils'
import countDownVector from '../../../../assets/images/countdown_vector.png'

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
}

const Countdown = ({ countdownTimestampMs }) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [countdownTimestampMs])

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
    }

    return (
        <main className="countdown-timer-container" id="countdown">
            <img
                srcSet={countDownVector}
                alt="Sergio y mica"
                className="countdown-vector"
            />
            <div className="countdown-timer">
                <p className="until">Falta</p>
                <div className="countdown-clock">
                    <div className="countdown-column days-line">
                        <p>{remainingTime.days}</p>
                        <p>Días</p>
                    </div>
                    <div className="countdown-column hours-line">
                        <p>{remainingTime.hours}</p>
                        <p>Horas</p>
                    </div>
                    <div className="countdown-column minutes-line">
                        <p>{remainingTime.minutes}</p>
                        <p>Minutos</p>
                    </div>
                    <div className="countdown-column">
                        <p>{remainingTime.seconds}</p>
                        <p>Segundos</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Countdown
