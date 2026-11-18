import { useState } from 'react'

const mockData = [
    { username: 'Ola Normann', email: 'ola.normann@norge.no'},
    { username: 'Torleif', email: 'torleif@kodehode.no' },
    { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
    { username: 'Sander', email: 'sander@kodehode.no' },
]

function Users() {
    const [users, setUsers] = useState(mockData)

    return (
        <div>
            <h2>Brukere</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.email}>
                        {user.username} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users