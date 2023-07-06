import React from 'react'
import LoginForm from '../components/LoginForm'
import { resetLoginStatus } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {

  const dispatch = useDispatch();
  const { isLoggedIn, refreshIntervalId } = useSelector((state) => ({
    isLoggedIn: state.isLoggedIn,
    refreshIntervalId: state.refreshIntervalId
  }));

  const handleClick = async () => {
    const response = await fetch("http://localhost:5119/api/authentication/logout", {
      method: "POST",
      credentials: "include",
      headers: {"Authorization": `Bearer ${window.localStorage.getItem("accessToken")}`}
    });

    if (response.ok) {
      clearInterval(refreshIntervalId);
      dispatch(resetLoginStatus());
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
