import { useState } from 'react'
import cat1 from '../assets/cat1.png'
import cat2 from '../assets/cat2.png'
import cat3 from '../assets/cat3.png'

function CookieClicker() {
    const [score, setScore] = useState(0)
    let gatto = cat1
    if (score > 0) {
        gatto = score % 2 === 1 ? cat2 : cat3
    }

    return (
        <div>

            <div className="contatore">
                <p>Kjeks spist:</p>
                <strong>{score}</strong>
            </div>

            <img className="gatto"
                src={gatto}
                alt="Cat eating a cookie"
            />

            <button className={score === 0 ? 'biscotto pulsa' : 'biscotto'} onClick={() => setScore(score + 1)}>
                <img src="cookie.png" alt="Image of a Cookie" width="100" />
            </button>

            <p className="didascalia">
                {score === 0 ? 'Start kjeksfesten!' : 'Ta en til!'}
            </p>

        </div>
    )
}

export default CookieClicker