import React, { useEffect, useState } from 'react'
import Student from '../components/Student'
import Registration from './Registration';

export default function StudentRegistrationList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("http://localhost:5119/api/studentregistration", {
      signal: controller.signal
    })
    .then((response) => response.json())
    .then((data) => setStudents(data));

    return () => controller.abort();
  }, []);

  const studentList = students.map((student, index) => (
    <Student props={student} key={index}>
      <Registration props={student.registrations} />
    </Student>
  ));
  
  const deansList = students.filter(student => student.gpa >= 3.5)
  .map((student, index) => <h4 key={index}>{student.firstName} {student.lastName}</h4>);

  return (
    <>
      <h2>Students</h2>
      <section>
        <h3>Registered Students</h3>
        {studentList}
      </section>
      <section>
        <h3>Dean's List</h3>
        {deansList}
      </section>
    </>
  )
}
