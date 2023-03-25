import React from 'react'
import { useForm } from 'react-hook-form'

export default function LoginForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='username'>Username: </label>
      <input type="text" {...register("username", { require: true})} id="username" />
      <label htmlFor='password'>Password: </label>
      <input type="password" {...register("password", { require: true})} id="password" />
      <button type="submit">Login</button>
    </form>
  )
}
