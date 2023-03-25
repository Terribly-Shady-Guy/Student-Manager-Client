import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from "./pages/Login"
import SignUp from './pages/SignUp'
import StudentForm from './pages/StudentForm'
import StudentRegistrationList from './pages/StudentRegistrationList'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/studentform'>Register</Link>
          <Link to='/studentregistrationlist'>Student Registrations</Link>
        </nav>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/studentform' element={<StudentForm />} />
          <Route path='/studentregistrationlist' element={<StudentRegistrationList />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
