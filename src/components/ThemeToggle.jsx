import { useEffect } from 'react'
import useToggle from '../hooks/useToggle.js'

function ThemeToggle() {
    const [light, toggleLight] = useToggle()

  useEffect(() => {
    document.body.classList.toggle('light', light)
    return () => document.body.classList.remove('light')
  }, [light])

  return (
        <button onClick={toggleLight}>
      {light ? 'Dark mode' : 'Light mode'}
    </button>
  )
}

export default ThemeToggle
