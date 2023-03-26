import React from 'react'
import { useForm } from 'react-hook-form'
import { useLoggedInStore } from '../store/store';

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const [setLoginStatus] = useLoggedInStore((state) => [state.setLoginStatus]);

  const onSubmit = async (formData) => {
    const response = await fetch("http://localhost:5119/api/authentication/login", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      const token = await response.text();

      window.localStorage.setItem("accessToken", token);
      setLoginStatus(true);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='username'>Username: </label>
      <input type="text" {...register("username", { required: true})} id="username" />
      <label htmlFor='password'>Password: </label>
      <input type="password" {...register("password", { required: true})} id="password" />
      <button type="submit">Login</button>
    </form>
  )
}
