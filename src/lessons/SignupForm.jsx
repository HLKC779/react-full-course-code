import { useState } from 'react'

function SignupForm() {
  const [form, setForm] = useState({ email: '', city: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  return (
    <div className="panel">
      <h2>Sign up</h2>
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
      />
      <p>{form.email || '...'} from {form.city || '...'}</p>
    </div>
  )
}

export default SignupForm
