import React from 'react'
import LoginForm from '../components/LoginForm'
import { useLoggedInStore } from '../store/store'

export default function Login() {
  const [isLoggedIn, setLoginStatus, setAdminStatus] = useLoggedInStore((state) => {
    return [state.isLoggedIn, state.setLoginStatus, state.setAdminStatus]
  });

  async function handleClick() {
    const response = await fetch("http://localhost:5119/api/authentication/logout", {
      method: "POST",
      credentials: "include",
      headers: {"Authorization": `Bearer ${window.localStorage.getItem("accessToken")}`}
    });

    if (response.ok) {
      setLoginStatus(false);
      setAdminStatus(false);
      window.localStorage.removeItem("accessToken");
    }
  }

  return (
    <>
      <h2>Login</h2>
      {isLoggedIn ? <button type='button' onClick={handleClick}>Logout</button> : <LoginForm />}
    </>
  )
}
