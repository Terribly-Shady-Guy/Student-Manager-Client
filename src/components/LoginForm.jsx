import React from 'react'

export default function LoginForm() {
  return (
    <form>
      <label htmlFor='username'>Username: </label>
      <input type="text" name="username" id="username" />
      <label htmlFor='password'>Password: </label>
      <input type="password" name="password" id="password" />
      <button type="button">Login</button>
    </form>
  )
}
