import React from 'react'

export default function SignUpForm() {
  return (
    <form>
        <label htmlFor="first-name">First Name: </label>
        <input type="text" name="firstName" id="first-name" />
        <label htmlFor="last-name">Last Name: </label>
        <input type="text" name="lastName" id="last-name" />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" />
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />
        <button type='button'>Create</button>
    </form>
  )
}
