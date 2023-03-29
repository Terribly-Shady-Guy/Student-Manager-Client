import React, { useState } from 'react'
import RegistrationForm from '../components/RegistrationForm'
import StudentForm from '../components/StudentForm'

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
          {registrations.map((item, index) => (
          <tr key={index}>
            <td>{item.courseNumber}</td>
            <td>{item.credits}</td>
            <td>{item.attendenceType}</td>
            <td>{item.bookFormat}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
