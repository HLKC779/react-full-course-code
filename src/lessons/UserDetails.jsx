import { useEffect, useState } from 'react'

function UserDetails() {
  const [userId, setUserId] = useState(1)
  const [user, setUser] = useState(null)

  useEffect(() => {
    let ignore = false
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        if (!ignore) setUser(data)
      })
    return () => {
      ignore = true
    }
  }, [userId])

  return (
    <div className="panel">
      <h2>User #{userId}</h2>
      <p>{user ? user.name : 'Loading...'}</p>
      <button
        disabled={userId === 1}
        onClick={() => setUserId(userId - 1)}
      >
        Previous
      </button>
      <button onClick={() => setUserId(userId + 1)}>Next</button>
    </div>
  )
}

export default UserDetails
