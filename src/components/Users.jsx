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

    function handleAdd() {
        if (newUsername === '' || newEmail === '') return
        setUsers([...users, { username: newUsername, email: newEmail
    }])
        setNewUsername('')
        setNewEmail('')
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

                <button className="partecipa" onClick={handleAdd}>Meld på</button>
            </div>
        </div>
    )
}

export default Users