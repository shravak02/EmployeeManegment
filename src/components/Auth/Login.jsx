import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler =(e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  }
  return (
    <div  className='flex flex-col h-screen w-screen items-center justify-center'>
      <div className='border-2 border-red-800  rounded-b-full p-20'>
      <form onSubmit={(e) =>{
        submitHandler(e)
      }}
      className='flex flex-col items-center justify-center'>
            <input 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            required 
            className='text-gray-500 outline-none bg-transparent border-2 border-red-800  py-3 px-5 text-xl rounded-full' type='email' placeholder='Enter your email' autoComplete="username" />
            <input 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required 
            className='text-gray-500 outline-none mt-3 bg-transparent border-2 border-red-800  py-3 px-5 text-xl rounded-full' type='password' placeholder='Enter password' autoComplete="current-password" />
            <button className='text-black outline-none bg-red-800 mt-3   py-3 px-5 text-xl rounded-full'>Login</button>
            
        </form>
      </div>
      <div className='border-2 border-red-800 p-5 mt-3 rounded-full'></div>
    </div>
  )
}

export default Login
