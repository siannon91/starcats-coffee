import { useState } from 'react'
import cat2 from '../assets/cat2.png'
import cat3 from '../assets/cat3.png'

function CookieClicker() {
    const [score, setScore] = useState(0)
    return (
        <div>
            
            <div className="contatore">
                <p>Kjeks spist</p>
                <strong>{score}</strong>
            </div>

            <img className="gatto"
                src={score % 2 === 0 ? cat2 : cat3}
                alt="Cat eating a cookie"
            />

            <button className="biscotto" onClick={() => setScore(score + 1)}>
                <img src="cookie.png" alt="Image of a Cookie" width="100" />
            </button>

        </div>
    )
}

export default CookieClicker