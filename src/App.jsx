import { NavLink, Routes, Route } from 'react-router'
import TasksPage from './pages/TasksPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HelloPage from './pages/HelloPage.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="top-bar">
        <h1>Task Tracker</h1>
        <nav>
          <NavLink to="/">Tasks</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/hello/:name" element={<HelloPage />} />
        <Route path="*" element={<p>Page not found.</p>} />
      </Routes>
    </div>
  )
}

export default App
