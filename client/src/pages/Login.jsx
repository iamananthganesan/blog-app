import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleLoginForm = async (event) => {
    event.preventDefault();
    const loginFormDetails = {
      userName,
      password
    }

    try {
      const response = await axios.get('auth/login');
      console.log('response', response)
      navigate('/')
    } catch (error) {
      console.log('error', error);
      throw error
    }
  }

  useEffect(async () => {
    const response = await fetch('auth/users')
    console.log(response);
  }, [])
  return (
    <div className='loginAuth'>
      <h1>Login</h1>
      <form onSubmit={handleLoginForm}>
        <input type='text' placeholder='username' onChange={(e) => { setUserName(e.target.value) }} />
        <input type='password' placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />
        <button type='submit'>Login</button>
        <p>This is an error!!!</p>
        <span>
          Dont you have an account? <Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
