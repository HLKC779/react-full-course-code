import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const [liked, setLiked] = useState(false)
  const [hovered, setHovered] = useState(false)

  function increase() {
    setCount(count + 1)
  }

  function addThree() {
    setCount((c) => c + 1)
    setCount((c) => c + 1)
    setCount((c) => c + 1)
  }

  return (
    <div className="panel">
      <h2
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Count: {count} {hovered && '(hovering)'}
      </h2>
      <button onClick={increase}>Add 1</button>
      <button onClick={addThree}>Add 3</button>
      <button onClick={() => setCount(count - 1)}>Subtract 1</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setLiked(!liked)}>
        {liked ? 'Liked!' : 'Like'}
      </button>
    </div>
  )
}

export default Counter
