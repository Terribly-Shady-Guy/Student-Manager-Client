import React from 'react'
import LoginForm from '../components/LoginForm'
import { resetloginStatus, setRefreshIntervalId } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const refreshIntervalId = useSelector((state) => state.login.refreshIntervalId);

  async function handleClick() {
    const response = await fetch("http://localhost:5119/api/authentication/logout", {
      method: "POST",
      credentials: "include",
      headers: {"Authorization": `Bearer ${window.localStorage.getItem("accessToken")}`}
    });

    if (response.ok) {
      clearInterval(refreshIntervalId);
      dispatch(resetloginStatus());
      dispatch(setRefreshIntervalId({refreshIntervalId: null}));
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
