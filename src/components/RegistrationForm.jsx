import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function RegistrationForm() {
  const {register} = useFormContext();

  return (
    <div>
        <label htmlFor='select-class'>Class: </label>
        <select id='select-class' {...register("classNumber", {required: true})}>
            <option value={"CSCI 1101"}>CSCI 1101</option>
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
        <button type='button'>Add Class</button>
    </div>
  )
}
