import React from 'react'

export default function StudentForm(props) {
  return (
    <form>
        <label htmlFor='input-first-name'>First Name: </label>
        <input type="text" name="firstName" id="input-first-name" />
        <label htmlFor='input-last-name'>Last Name: </label>
        <input type="text" name="lastName" id="input-last-name" />
        <label htmlFor='input-major'>Major: </label>
        <input type="text" name="major" id="input-major" />
        <label htmlFor='input-exp-grad-date'>Expected Graduation Date: </label>
        <input type="date" name="expectedGradDatw" id="input-exp-grad-date" />
        <label htmlFor="input-gpa">GPA: </label>
        <input type="number" name="gpa" id="input-gpa" />
        {props.children}
        <button type='button'>Register</button>
    </form>
  )
}
