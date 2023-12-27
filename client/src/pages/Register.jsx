import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
const Register = () => {
  //Instead of creating individual state 
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const [inputs, setInputs] = useState(
    { username: "", email: "", password: "" }
  )

  const handleInputFields = (event) => {
    setInputs((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value }
    })
  }

  const handleRegisterForm = async (event) => {
    event.preventDefault();
    try {
      await axios.post('api/auth/register', inputs)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
    }
    catch (error) {
      throw console.log(error)
    }
  }
  return (
    <div className='loginAuth'>
      <h1>Register</h1>
      <form onSubmit={handleRegisterForm}>
        <input type='text' placeholder='username' name="username" onChange={handleInputFields} />
        <input type='email' placeholder='email' name="email" onChange={handleInputFields} />
        <input type='password' placeholder='password' name="password" onChange={handleInputFields} />
        <button type='submit'>Register</button>
        <p>This is an error!!!</p>
        <span>
          Do you have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register
