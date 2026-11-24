import useFetch from '../hooks/useFetch.js'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

function Users() {
  const { data: users, loading, error } = useFetch(USERS_URL)

  if (loading) return <p>Loading users...</p>
  if (error) return <p className="error">Could not load: {error}</p>

  return (
    <div className="panel">
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
