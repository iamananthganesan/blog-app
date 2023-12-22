import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const loginForm = useState({})
  return (
    <div className='loginAuth'>
      <h1>Register</h1>
      <form>
        <input type='text' placeholder='username' />
        <input type='email' placeholder='email' />
        <input type='password' placeholder='password' />
        <button>Register</button>
        <p>This is an error!!!</p>
        <span>
          Do you have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register
 