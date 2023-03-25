import React from 'react'
import Registration from './Registration';

export default function Student({props}) {
  let grade = "";
  if (props.gpa > 3) {
    grade = "A";
  } else if (props.gpa > 2) {
    grade = "B";
  } else if (props.gpa > 1) {
    grade = "C";
  } else if (props.gpa > 0) {
    grade = "D"
  } else {
    grade = "F";
  }

  return (
    <ul className='student'>
      <li>Name: {props.firstName} {props.lastName}</li>
      <li>Major: {props.major}</li>
      <li>Expected Graduation Date: {props.expectedGradDate}</li>
      <li>GPA: {props.gpa}</li>
      <li>Grade: {grade}</li>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Credits</th>
            <th>Attendence Type</th>
            <th>Book Format</th>
          </tr>
        </thead>
        <tbody>
            {props.registrations.map((registration, index) => <Registration props={registration} key={index} />)}
        </tbody>
      </table>
    </ul>
  )
}
