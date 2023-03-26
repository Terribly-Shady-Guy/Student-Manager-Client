import React from 'react'
import LoginForm from '../components/LoginForm'

export default function Login() {

  async function handleClick() {
    const response = await fetch("http://localhost:5119/api/authentication/logout", {
      method: "POST",
      credentials: "include",
      headers: {"Authorization": `Bearer ${window.localStorage.getItem("accessToken")}`}
    });

    if (response.ok) {
      window.localStorage.removeItem("accessToken");
    }
  }

  return (
    <>
      <h2>Login</h2>
      <button type='button' onClick={handleClick}>Logout</button>
      <LoginForm />
    </>
  )
}
