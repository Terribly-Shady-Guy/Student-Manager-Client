import React from 'react'
import RegistrationForm from '../components/RegistrationForm'
import StudentForm from '../components/StudentForm'

export default function StudentRegistrationForm() {
  return (
    <>
      <h2>Register</h2>
      <StudentForm>
        <RegistrationForm />
      </StudentForm>
    </>
  )
}
