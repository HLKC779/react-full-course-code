import { useState } from 'react'

function useToggle(initial = false) {
  const [on, setOn] = useState(initial)
  const toggle = () => setOn((value) => !value)
  return [on, toggle]
}

export default useToggle
