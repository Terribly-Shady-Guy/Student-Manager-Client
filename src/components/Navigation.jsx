import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Login from "../pages/Login"
import SignUp from '../pages/SignUp'
import StudentForm from '../pages/StudentForm'
import StudentRegistrationList from '../pages/StudentRegistrationList'

export default function Navigation() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/studentform'>Register</Link>
        <Link to='/studentregistrationlist'>Student Registrations</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/studentform' element={<StudentForm />} />
        <Route path='/studentregistrationlist' element={<StudentRegistrationList />} />
      </Routes>
    </Router>
  )
}
