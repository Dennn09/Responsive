import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { LogOut, LoginUserRe } from '../../redux/action/auth.login';

export const ReduxLogin = () => {
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")
  
    const dispatch = useDispatch();
  
    const handleInput = (e) => {
      if (e) {
        if (e.target.id === "email") {
          setEmail(e.target.value)
        }
        if (e.target.id === "password") {
          setPassword(e.target.value)
        }
      }
    }
  
    const Login = () => {
      dispatch(LoginUserRe(
        {
          "email": Email,
          "password": Password
        }
      ))
    }
  
    return (
      <div className='h-[100vh] w-[100vw] flex flex-col justify-center items-center'>
       <div className=' flex ' >
       <input onChange={handleInput} id='email' className='border' type='email' />
        <input onChange={handleInput} id='password' className='border' type='password' />
        <button className='bg-blue-700 ml-3 p-2' onClick={() => { Login() }}>login</button>
        <button onClick={()=>{
        dispatch(LogOut())
      }}>logout</button>
       </div>
      </div>
    )
  }
