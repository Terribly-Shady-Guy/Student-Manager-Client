import React from 'react'

export default function SignUpForm() {
  return (
    <form>
        <label htmlFor="first-name"></label>
        <input type="text" name="firstName" id="first-name" />
        <label htmlFor="last-name"></label>
        <input type="text" name="lastName" id="last-name" />
        <label htmlFor="email"></label>
        <input type="email" name="email" id="email" />
        <label htmlFor="username"></label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password"></label>
        <input type="password" name="password" id="password" />
        <button type='button'>Create</button>
    </form>
  )
}
