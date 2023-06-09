import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function RegistrationForm({ addRegistration }) {
  const { register, handleSubmit } = useForm();
  const [courseNumbers, setCourseNumbers] = useState([]);
  
  useEffect(() => {
    const controller = new AbortController();

    fetch("http://localhost:5119/api/courses", {
      signal: controller.signal
    })
    .then((response) => response.json())
    .then((data) => setCourseNumbers(data));

    return () => controller.abort();
  }, [])

  return (
    <div>
        <label htmlFor='select-class'>Class: </label>
        <select id='select-class' {...register("classNumber", {required: true})}>
            {courseNumbers.map((courseNumber, index) => <option value={courseNumber} key={index}>{courseNumber}</option>)}
        </select>
        <label htmlFor="input-credits">Credits: </label>
        <input type="number" {...register("credits", {required: true})} id="input-credits" />
        <fieldset id='attendence-type'>
            <legend>Attendence Type</legend>
            <label htmlFor="radio-face">Face-to-Face</label>
            <input type="radio" {...register("attendenceType")} id="radio-face" value="Face-to-Face" />
            <label htmlFor="radio-sync-online">Synchronous Online</label>
            <input type="radio" {...register("attendenceType")} id="radio-sync-online" value="Synchronous Online" />
            <label htmlFor="radio-async-online">Asynchronous Online</label>
            <input type="radio" {...register("attendenceType")} id="radio-async-online" value="Asynchronous Online" />
        </fieldset>
        <fieldset id='book-format'>
            <legend>Book Format</legend>
            <label htmlFor="checkbox-physical">Physical</label>
            <input type="checkbox" {...register("bookFormat")} id="checkbox-physical" value="Physical" />
            <label htmlFor="checkbox-digital">Digital</label>
            <input type="checkbox" {...register("bookFormat")} id="checkbox-digital" value="Digital" />
            <label htmlFor='checkbox-audio'>Audio</label>
            <input type="checkbox" {...register("bookFormat")} id="checkbox-audio" value="Audio" />
        </fieldset>
        <button type='button' onClick={handleSubmit(addRegistration)}>Add Class</button>
    </div>
  )
}
