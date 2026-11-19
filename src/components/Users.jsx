import { useState } from 'react'

const mockData = [
    { username: 'Ola Normann', email: 'ola.normann@norge.no'},
    { username: 'Torleif', email: 'torleif@kodehode.no' },
    { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
    { username: 'Sander', email: 'sander@kodehode.no' },
]

function Users() {
    const [users, setUsers] = useState(mockData)
    const [newUsername, setNewUsername] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [melding, setMelding] = useState('')

    function handleAdd() {
        const navn = newUsername.trim()
        const epost = newEmail.trim()

        if (navn === '' || epost === '') {
            setMelding('Fyll ut både navn og e-post.')
            return
        }
        if (!/^\S+@\S+\.\S+$/.test(epost)) {
            setMelding('Skriv inn en gyldig e-postadresse.')
            return
        }
        if (users.some((user) => user.email === epost)) {
            setMelding('Denne e-posten er allerede påmeldt.')
            return
        }

        setUsers([...users, { username: navn, email: epost }])
        setNewUsername('')
        setNewEmail('')
        setMelding('')

    }

    return (
        <div className="utenti">
            <h2>Deltakere på KJEKSFESTEN :</h2>

            <ul className="elenco">
                {users.map((user) => (
                    <li key={user.email}>
                        {user.username} - {user.email}
                    </li>
                ))}
            </ul>

            <div className="campi">
                <input
                    type="text"
                    placeholder="Deltakernavn"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="E-post"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                />

                <button className="partecipa" onClick={handleAdd}>Meld deg på!</button>
                {melding && <p className="feilmelding">{melding}</p>}
            </div>
        </div>
    )
}

export default Users