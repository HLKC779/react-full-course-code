import { useState } from 'react'

const START = [
  { id: 1, name: 'Milk', done: false },
  { id: 2, name: 'Bread', done: true },
  { id: 3, name: 'Eggs', done: false },
]

function ShoppingList() {
  const [items, setItems] = useState(START)

  function addApples() {
    const apples = { id: Date.now(), name: 'Apples', done: false }
    setItems([...items, apples])
  }

  function toggle(id) {
    setItems(items.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    ))
  }

  function remove(id) {
    setItems(items.filter((item) => item.id !== id))
  }

  function clearDone() {
    setItems(items.filter((item) => !item.done))
  }

  const sorted = [...items].sort((a, b) => a.name.localeCompare(b.name))
  const left = items.filter((item) => !item.done).length

  return (
    <div className="panel">
      <h2>Shopping list</h2>
      <ul>
        {sorted.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => toggle(item.id)}
              />
              {item.name}
            </label>
            <button onClick={() => remove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Items left: {left}</p>
      <button onClick={addApples}>Add apples</button>
      <button onClick={clearDone}>Clear done</button>
    </div>
  )
}

export default ShoppingList
