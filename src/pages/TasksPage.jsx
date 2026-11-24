import { useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'
import TaskForm from '../components/TaskForm.jsx'
import FilterBar from '../components/FilterBar.jsx'
import TaskList from '../components/TaskList.jsx'

const SAMPLE_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=3'

function TasksPage() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addTask(title) {
    const task = { id: crypto.randomUUID(), title, done: false }
    setTasks([...tasks, task])
  }

  function toggleTask(id) {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    ))
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function clearDone() {
    setTasks(tasks.filter((task) => !task.done))
  }

  async function importSamples() {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(SAMPLE_URL)
      if (!response.ok) throw new Error('HTTP ' + response.status)
      const data = await response.json()
      const samples = data.map((todo) => ({
        id: crypto.randomUUID(),
        title: todo.title,
        done: todo.completed,
      }))
      setTasks((current) => [...current, ...samples])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  let visible = tasks
  if (filter === 'active') visible = tasks.filter((task) => !task.done)
  if (filter === 'done') visible = tasks.filter((task) => task.done)
  visible = visible.filter((task) =>
    task.title.toLowerCase().includes(query.toLowerCase())
  )
  const left = tasks.filter((task) => !task.done).length

  useEffect(() => {
    document.title = `${left} tasks left`
  }, [left])

  return (
    <main className="tasks">
      <TaskForm onAdd={addTask} />
      <FilterBar filter={filter} onChange={setFilter} />
      <input
        className="search"
        placeholder="Search tasks"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <TaskList
        tasks={visible}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
      <p className="summary">{left} of {tasks.length} tasks left</p>
      <button onClick={clearDone}>Clear done</button>
      <button className="link" onClick={importSamples} disabled={loading}>
        {loading ? 'Importing...' : 'Import sample tasks'}
      </button>
      {error && <p className="error">Could not import: {error}</p>}
    </main>
  )
}

export default TasksPage
