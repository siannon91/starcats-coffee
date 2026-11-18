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

    return (
        <div>
            <h2>Kattenytt</h2>
        </div>
    )
}

export default CatFacts