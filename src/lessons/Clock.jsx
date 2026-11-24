import { useEffect, useState } from 'react'

function Clock() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return <h2 className="clock">Seconds on this page: {seconds}</h2>
}

export default Clock
