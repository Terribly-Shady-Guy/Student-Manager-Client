import React from 'react'
import { useForm } from 'react-hook-form'

export default function StudentForm({registrations, children}) {
  const {register, handleSubmit} = useForm();

  const onSubmit = async (studentData) => {
    const studentRegistration = {
      ...studentData,
      registrations: registrations
    };

    await fetch("http://localhost:5119/api/studentregistration", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`
      },
      body: JSON.stringify(studentRegistration)
    });
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
      {children}
      <button type='submit'>Register</button>
    </form>
  )
}
