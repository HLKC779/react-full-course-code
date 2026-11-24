import { useState } from 'react'

function FeedbackForm() {
  const [name, setName] = useState('')
  const [rating, setRating] = useState('5')
  const [comment, setComment] = useState('')
  const [subscribe, setSubscribe] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    if (name.trim() === '') {
      setError('Please enter your name.')
      return
    }
    setSent({ name, rating, comment, subscribe })
    setError('')
    setName('')
    setComment('')
  }

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <h2>Feedback</h2>
      <input
        placeholder="Your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <select
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      >
        <option value="5">5 - Loved it</option>
        <option value="3">3 - It was OK</option>
        <option value="1">1 - Not for me</option>
      </select>
      <textarea
        placeholder="Comments"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <p>{comment.length} characters</p>
      <label>
        <input
          type="checkbox"
          checked={subscribe}
          onChange={(event) => setSubscribe(event.target.checked)}
        />
        Send me updates
      </label>
      <p>Hello, {name || 'stranger'}!</p>
      <button type="submit" disabled={name.trim() === ''}>Send</button>
      {error && <p className="error">{error}</p>}
      {sent && (
        <p>
          Thanks, {sent.name}! You rated us {sent.rating}.
          {sent.subscribe && ' We will keep you posted.'}
        </p>
      )}
    </form>
  )
}

export default FeedbackForm
