import { useState, useEffect } from 'react'

function CatFacts() {
    const [facts, setFacts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://catfact.ninja/facts?limit=5')
            .then((response) => response.json())
            .then((data) => {
                setFacts(data.data)
                setLoading(false)
            })
        .catch(() => {
            setError('Noe gikk galt. Prøv igjen senere.')
            setLoading(false)
        })
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div className="notizie">
            <h2>Visste du at...?</h2>
            <div className="finestra">
                <ul className="fatti">
                    {[...facts, ...facts].map((item, index) => (
                        <li key={index}>- {item.fact} -</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CatFacts