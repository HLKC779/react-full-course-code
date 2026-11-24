import { useState } from 'react'

function KeyDemo() {
  const [names, setNames] = useState(['Ali', 'Sara', 'Omar'])

  return (
    <div className="panel">
      <button onClick={() => setNames([...names].reverse())}>Reverse</button>
      <ul>
                {names.map((name) => (
          <li key={name}>
            {name} <input placeholder="note" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default KeyDemo
