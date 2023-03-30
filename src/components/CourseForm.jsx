import React from 'react'
import { useForm } from 'react-hook-form'

export default function CourseForm() {
  const { register, handleSubmit } = useForm();

  const submitForm = async (course) => {
    await fetch("http://localhost:5119/api/courses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`
      },
      body: JSON.stringify(course)
    });
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <label htmlFor="input-course-number">Course Number: </label>
      <input type="text" {...register("courseNumber")} id="input-course-number" />
      <label htmlFor="input-course-name">Course Name: </label>
      <input type="text" {...register("courseName")} id="input-course-name" />
      <label htmlFor="input-instructor">Instructor: </label>
      <input type="text" {...register("instructor")} id="input-instructor" />
      <label htmlFor="date-start-date">Start Date: </label>
      <input type="date" {...register("startDate")} id="date-start-date" />
      <label htmlFor="date-end-date">End Date: </label>
      <input type="date" {...register("endDate")} id="date-end-date" />
      <button type='submit'>Add Course</button>
    </form>
  )
}
