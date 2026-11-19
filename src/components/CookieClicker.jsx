import { useState } from 'react'

function CookieClicker() {
    const [score, setScore] = useState(0)
    return (
        <div>
            <div className="contatore">
                <p>Kjeks spist</p>
                <strong>{score}</strong>
            </div>
            <button className="biscotto" onClick={() => setScore(score + 1)}>
                <img src="cookie.png" alt="Image of a Cookie" width="100" />
            </button>
        </div>
    )
}

export default CookieClicker