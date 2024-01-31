import React, { useState } from 'react'
import RegistrationForm from '../components/RegistrationForm'
import StudentForm from '../components/StudentForm'
import RegistrationTable from '../components/RegistrationTable';

export default function StudentRegistrationForm() {
  const [registrations, setRegistrations] = useState([]);
  
  const addRegistration = (registration) => {
    setRegistrations([...registrations, registration]);
  }

  return (
    <>
      <h2>Register</h2>
      <StudentForm registrations={registrations}>
        <RegistrationForm addRegistration={addRegistration} />
      </StudentForm>
      <RegistrationTable registrationList={registrations} />
    </>
  )
}
