import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useSelector} from 'react-redux'

const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import("../pages/Login"));
const NewCourse = React.lazy(() => import('../pages/NewCourse'));
const NotFound = React.lazy(() => import('../pages/NotFound')); 
const SignUp = React.lazy(() => import('../pages/SignUp'));
const StudentRegistrationForm = React.lazy(() => import('../pages/StudentRegistrationForm'));
const StudentRegistrationList = React.lazy(() => import('../pages/StudentRegistrationList'));

export default function Nav() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const isAdmin = useSelector((state) => state.login.isAdmin);

  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        {isAdmin && <Link to='/signup'>Sign Up</Link>}
        {isLoggedIn && <Link to='/studentregistrationform'>Register</Link>}
        <Link to='/studentregistrationlist'>Student Registrations</Link>
        {isAdmin && <Link to="/newcourse">New Course</Link>}
      </nav>
      <React.Suspense fallback={<h2>Loading...</h2>}>
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
  )
}
