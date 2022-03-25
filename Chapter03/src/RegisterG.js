import React, { useState } from 'react'

const RegisterG = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email: email, password: password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register here</h1>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Create Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        />
      </div>
      <div>
        <button type="submit" disabled={email === '' || password === ''}>
          Submit
        </button>
      </div>
    </form>
  )
}

export { RegisterG }
