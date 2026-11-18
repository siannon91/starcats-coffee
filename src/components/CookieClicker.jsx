import { useState } from 'react'

function CookieClicker() {
    const [score, setScore] = useState(0)
    return (
        <div>
            <h2>Kjeks spist: {score}</h2>
            <button onClick={() => setScore(score + 1)}>
                <img src="cookie.png" alt="Image of a Cookie" width="100" />
            </button>
        </div>
    )
}

export default CookieClicker