import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function StudentForm(props) {
  const {register, handleSubmit} = useFormContext();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='input-first-name'>First Name: </label>
      <input type="text" {...register("firstName", {required: true})} id="input-first-name" />
      <label htmlFor='input-last-name'>Last Name: </label>
      <input type="text" {...register("lastName", {required: true})} id="input-last-name" />
      <label htmlFor='input-major'>Major: </label>
      <input type="text" {...register("major", {required: true})} id="input-major" />
      <label htmlFor='input-exp-grad-date'>Expected Graduation Date: </label>
      <input type="date" {...register("expectedGradDate", {required: true})} id="input-exp-grad-date" />
      <label htmlFor="input-gpa">GPA: </label>
      <input type="number" {...register("gpa", {required: true})} id="input-gpa" />
      {props.children}
      <button type='submit'>Register</button>
    </form>
  )
}
