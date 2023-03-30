import React from 'react'
import Student from '../components/Student'
import Registration from './Registration';

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
        },
        {
          courseNumber: "MATH 1101",
          attendenceType: "Asyncronous Online",
          credits: 3,
          bookFormat: "Digital, Audio"
        }
      ]
    }
  ]

  const studentlist = testStudents.map((student, index) => (
    <Student props={student} key={index}>
      <Registration props={student.registrations} />
    </Student>
  ));
  
  const deansList = testStudents.filter(student => student.gpa >= 3.5);

  return (
    <>
      <h2>Students</h2>
      <section>
        <h3>Registered Students</h3>
        {studentlist}
      </section>
      <section>
        <h3>Dean's List</h3>
        {deansList.map((student, index) => <h5 key={index}>{student.firstName} {student.lastName}</h5>)}
      </section>
    </>
  )
}
