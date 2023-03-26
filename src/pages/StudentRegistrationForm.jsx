import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import RegistrationForm from '../components/RegistrationForm'
import StudentForm from '../components/StudentForm'

export default function StudentRegistrationForm() {
   const methods = useForm();

  return (
    <>
      <h2>Register</h2>
      <FormProvider {...methods}>
        <StudentForm>
          <RegistrationForm />
        </StudentForm>
      </FormProvider>
    </>
  )
}
