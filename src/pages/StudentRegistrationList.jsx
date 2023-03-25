import React from 'react'
import Student from '../components/Student'

export default function StudentRegistrationList() {
  const testStudents = [
    {
      firstName: "John",
      lastName: "Doe",
      major: "Computer Science",
      expectedGradDate: "2027-05-16",
      gpa: 3.6,
      registrations: [
        {
          courseNumber: "CSCI 1101",
          attendenceType: "Face-to-Face",
          credits: 3,
          bookFormat: "Physical"
        }
      ]
    }
  ]
  return (
    <>
      <h3>Students</h3>
      <section>
        {testStudents.map((student, index) => <Student props={student} key={index} />)}
      </section>
    </>
  )
}
