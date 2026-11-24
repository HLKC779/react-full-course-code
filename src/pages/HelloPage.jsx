import { useNavigate, useParams } from 'react-router'

function HelloPage() {
  const { name } = useParams()
  const navigate = useNavigate()

  return (
    <section className="panel">
      <h2>Hello, {name}!</h2>
      <button onClick={() => navigate('/')}>Go home</button>
    </section>
  )
}

export default HelloPage
