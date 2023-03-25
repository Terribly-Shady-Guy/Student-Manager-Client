import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Login from "../pages/Login"
import NewCourse from '../pages/NewCourse'
import NotFound from '../pages/NotFound'
import SignUp from '../pages/SignUp'
import StudentRegistrationForm from '../pages/StudentRegistrationForm'
import StudentRegistrationList from '../pages/StudentRegistrationList'

export default function Navigation() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/studentregistrationform'>Register</Link>
        <Link to='/studentregistrationlist'>Student Registrations</Link>
        <Link to="/newcourse">New Course</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/studentregistrationform' element={<StudentRegistrationForm />} />
        <Route path='/studentregistrationlist' element={<StudentRegistrationList />} />
        <Route path='/newcourse' element={<NewCourse />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}
