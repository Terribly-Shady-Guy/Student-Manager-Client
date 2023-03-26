import React from 'react'

export default function RegistrationForm() {
  return (
    <div>
        <label htmlFor='select-class'>Class: </label>
        <select id='select-class' name='classNumber'>
            <option value={"CSCI 1101"}>CSCI 1101</option>
        </select>
        <label htmlFor="input-credits">Credits: </label>
        <input type="number" name="credits" id="input-credits" />
        <fieldset id='attendence-type'>
            <legend>Attendence Type</legend>
            <label htmlFor="radio-face">Face-to-Face</label>
            <input type="radio" name="attendenceType" id="radio-face" value="Face-to-Face" />
            <label htmlFor="radio-sync-online">Synchronous Online</label>
            <input type="radio" name="attendenceType" id="radio-sync-online" value="Synchronous Online" />
            <label htmlFor="radio-async-online">Asynchronous Online</label>
            <input type="radio" name="attendenceType" id="radio-async-online" value="Asynchronous Online" />
        </fieldset>
        <fieldset id='book-format'>
            <legend>Book Format</legend>
            <label htmlFor="checkbox-physical">Physical</label>
            <input type="checkbox" name="bookFormat" id="checkbox-physical" />
            <label htmlFor="checkbox-digital">Digital</label>
            <input type="checkbox" name="bookFormat" id="checkbox-digital" />
            <label htmlFor='checkbox-audio'>Audio</label>
            <input type="checkbox" name="bookFormat" id="checkbox-audio" />
        </fieldset>
        <button type='button'>Add Class</button>
    </div>
  )
}
