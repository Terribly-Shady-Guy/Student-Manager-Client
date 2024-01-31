import './css/App.css'
import React, { useEffect } from "react"

import { useSelector, useDispatch } from 'react-redux'
import { Outlet, Link } from 'react-router-dom';

import { refreshTokens, setRefreshInterval } from './Functions/RefreshTokens';
import { setRefreshIntervalId } from './store/store';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem("accessToken");

    if (token === null) {
      return;
    }

    refreshTokens(token);

    let refreshIntervalId = setRefreshInterval();
    dispatch(setRefreshIntervalId(refreshIntervalId));

    return () => clearInterval(refreshIntervalId)
  }, [dispatch]);

  const { isLoggedIn, isAdmin } = useSelector((state) => ({
    isLoggedIn: state.isLoggedIn,
    isAdmin: state.isAdmin
  }));

  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        {isAdmin && <Link to='/signup'>Sign Up</Link>}
        {isLoggedIn && <Link to='/studentregistrationform'>Register</Link>}
        <Link to='/studentregistrationlist'>Student Registrations</Link>
        {isAdmin && <Link to="/newcourse">New Course</Link>}
      </nav>
      <Outlet />
    </div>
  )
}

export default App
