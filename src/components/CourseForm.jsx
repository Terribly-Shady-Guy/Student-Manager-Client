import React from 'react'

export default function CourseForm() {
  return (
    <form>
      <label htmlFor="input-course-number">Course Number: </label>
      <input type="text" name="courseNumber" id="input-course-number" />
      <label htmlFor="input-course-name">Course Name: </label>
      <input type="text" name="courseName" id="input-course-name" />
      <label htmlFor="input-instructor">Instructor: </label>
      <input type="text" name="instructor" id="input-instructor" />
      <label htmlFor="date-start-date">Start Date: </label>
      <input type="date" id="date-start-date" name="startDate" />
      <label htmlFor="date-end-date">End Date: </label><input type="date" name="endDate" id="date-end-date" />
      <button type='button'>Add Course</button>
    </form>
  )
}
