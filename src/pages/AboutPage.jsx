import { Link } from 'react-router'

function AboutPage() {
  return (
    <section className="panel">
      <h2>About</h2>
      <p>Built with React, Vite and React Router.</p>
      <Link to="/">Back home</Link>
    </section>
  )
}

export default AboutPage
