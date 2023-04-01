import React, { useEffect, useState } from 'react'
import Student from '../components/Student'
import Registration from './Registration';

export default function StudentRegistrationList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("http://localhosr:5119/api/studentregistration", {
      signal: controller.signal
    })
    .then((response) => response.json())
    .then((data) => setStudents(data));

    return () => controller.abort();
  })

  const studentlist = students.map((student, index) => (
    <Student props={student} key={index}>
      <Registration props={student.registrations} />
    </Student>
  ));
  
  const deansList = students.filter(student => student.gpa >= 3.5);

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
