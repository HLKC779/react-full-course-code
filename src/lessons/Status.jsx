import { useState } from 'react'

function Hint({ show }) {
  if (!show) return null
  return <p>Tip: old messages are archived.</p>
}

function Status() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [unread, setUnread] = useState(3)
  const [showHint, setShowHint] = useState(false)

  if (!loggedIn) {
    return (
      <div className="panel">
        <p>Please log in.</p>
        <button onClick={() => setLoggedIn(true)}>Log in</button>
      </div>
    )
  }

  return (
    <div className="panel">
      <h2>Welcome back!</h2>
      {unread > 0 && <p>You have {unread} unread messages.</p>}
      <p>{unread === 0 ? 'All caught up.' : 'Take a look.'}</p>
      <button onClick={() => setUnread(0)}>Mark all read</button>
      <button onClick={() => setLoggedIn(false)}>Log out</button>
      <button onClick={() => setShowHint(!showHint)}>
        {showHint ? 'Hide tip' : 'Show tip'}
      </button>
      <Hint show={showHint} />
    </div>
  )
}

export default Status
