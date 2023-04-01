import React from 'react'
import { useForm } from 'react-hook-form'

export default function SignUpForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (user) => {
    await fetch("http://localhost:5119/api/user", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`
      },
      body: JSON.stringify(user)
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="first-name">First Name: </label>
        <input type="text" {...register("firstName")} id="first-name" />
        <label htmlFor="last-name">Last Name: </label>
        <input type="text" {...register("lastName")} id="last-name" />
        <label htmlFor="email">Email: </label>
        <input type="email" {...register("email")} id="email" />
        <label htmlFor="username">Username: </label>
        <input type="text" {...register("username")} id="username" />
        <label htmlFor="password">Password: </label>
        <input type="password" {...register("password")} id="password" />
        <button type='submit'>Create</button>
    </form>
  )
}
