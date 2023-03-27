import React from 'react'
import { useForm } from 'react-hook-form'
import { setLoginStatus } from '../store/store';
import { useDispatch } from 'react-redux';

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    const response = await fetch("http://localhost:5119/api/authentication/login", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      const token = await response.text();
      dispatch(setLoginStatus({isLoggedIn: true, isAdmin: false}));
      window.localStorage.setItem("accessToken", token);
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
