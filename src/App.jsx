import './App.css'
import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import("./pages/Login"));
const NewCourse = React.lazy(() => import('./pages/NewCourse'));
const NotFound = React.lazy(() => import('./pages/NotFound')); 
const SignUp = React.lazy(() => import('./pages/SignUp'));
const StudentRegistrationForm = React.lazy(() => import('./pages/StudentRegistrationForm'));
const StudentRegistrationList = React.lazy(() => import('./pages/StudentRegistrationList'));


function App() {

  useEffect(() => {
    const intervalId = setInterval(async() => await refreshTokens(), 5 * 1000 * 60);
    return () => clearInterval(intervalId);
  }, [])

  async function refreshTokens() {
    const token = window.localStorage.getItem("accessToken");

    if (token === null) {
      return;
    }

    const response = await fetch("http://localhost:5119/api/authentication/refreshtokens", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(token)
    });

    if (response.ok) {
      const newToken = await response.text();
      window.localStorage.setItem("accessToken", newToken);
    }
  }


  return (
    <div className="App">
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/studentregistrationform'>Register</Link>
          <Link to='/studentregistrationlist'>Student Registrations</Link>
          <Link to="/newcourse">New Course</Link>
        </nav>
        <React.Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/studentregistrationform' element={<StudentRegistrationForm />} />
            <Route path='/studentregistrationlist' element={<StudentRegistrationList />} />
            <Route path='/newcourse' element={<NewCourse />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </React.Suspense>
      </Router>
    </div>
  )
}

export default App
