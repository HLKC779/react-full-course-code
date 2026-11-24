import { useState } from 'react'
import Button from '../components/Button.jsx'
import useLocalStorage from '../hooks/useLocalStorage.js'
import ThemeToggle from '../components/ThemeToggle.jsx'

function NoteInput({ onAdd }) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (text.trim() === '') return
    onAdd(text.trim())
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="New note"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

function SearchBox({ query, onChange }) {
  return (
    <input
      placeholder="Search notes"
      value={query}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}

function NoteList({ notes, onDelete }) {
  return (
    <ul>
      {notes.map((note) => (
        <li
          key={note.id}
          className={note.text.endsWith('!') ? 'important' : ''}
        >
          {note.text}
          <Button variant="danger" onClick={() => onDelete(note.id)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  )
}

function Notes() {
  const [notes, setNotes] = useLocalStorage('notes', [])
  const [query, setQuery] = useState('')
  const visible = notes.filter((note) =>
    note.text.toLowerCase().includes(query.toLowerCase())
  )

  function addNote(text) {
    setNotes([...notes, { id: crypto.randomUUID(), text }])
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <div className="panel">
      <ThemeToggle />
      <h2 style={{ color: '#61dafb' }}>Notes ({notes.length})</h2>
      <NoteInput onAdd={addNote} />
      <SearchBox query={query} onChange={setQuery} />
      <p>Showing {visible.length} of {notes.length}</p>
      <NoteList notes={visible} onDelete={deleteNote} />
    </div>
  )
}

export default Notes
