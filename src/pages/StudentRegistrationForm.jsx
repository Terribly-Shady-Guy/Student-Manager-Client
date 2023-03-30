import React, { useState } from 'react'
import RegistrationForm from '../components/RegistrationForm'
import StudentForm from '../components/StudentForm'
import Registration from '../components/Registration';

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
      <table>
        <thead>
          <tr>
            <th>Course #</th>
            <th>Credits</th>
            <th>Attendence Type</th>
            <th>Book Format</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((item, index) => <Registration props={item} key={index} />)}
        </tbody>
      </table>
    </>
  )
}
