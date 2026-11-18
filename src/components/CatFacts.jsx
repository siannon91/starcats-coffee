import { useState, useEffect } from 'react'

function CatFacts() {
    const [facts, setFacts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://catfact.ninja/facts?limit=5')
            .then((response) => response.json())
            .then((data) => console.log(data))
    }, [])

    return (
        <div>
            <h2>Kattenytt</h2>
        </div>
    )
}

export default CatFacts