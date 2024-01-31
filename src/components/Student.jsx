import React from 'react'

export default function Student({student, children}) {
  let grade = "";
  if (student.gpa > 3) {
    grade = "A";
  } else if (student.gpa > 2) {
    grade = "B";
  } else if (student.gpa > 1) {
    grade = "C";
  } else if (student.gpa > 0) {
    grade = "D"
  } else {
    grade = "F";
  }

  return (
    <ul className='student'>
      <li>Name: {student.firstName} {student.lastName}</li>
      <li>Major: {student.major}</li>
      <li>Expected Graduation Date: {student.expectedGradDate}</li>
      <li>GPA: {student.gpa}</li>
      <li>Grade: {grade}</li>
      {children}
    </ul>
  )
}
