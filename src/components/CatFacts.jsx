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
        <div>
            <h2>Kattenytt</h2>
            <ul>
                {facts.map((item) => (
                    <li key={item.fact}>{item.fact}</li>
                ))}
            </ul>
        </div>
    )
}

export default CatFacts