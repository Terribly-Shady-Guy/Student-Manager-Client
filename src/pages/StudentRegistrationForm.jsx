import React from 'react'
import RegistrationForm from '../components/RegistrationForm'
import StudentForm from '../components/StudentForm'

export default function StudentRegistrationForm() {
  return (
    <>
      <h3>Register</h3>
      <StudentForm />
      <RegistrationForm />
    </>
  )
}
