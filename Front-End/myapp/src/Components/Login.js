import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login () {
  const navigate=useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loginClickHandler = () => {
    if (email === '' || password === '') {
      alert('All fields are required')
    } else {
      try {
        const data = {
          email: email,
          password: password
        }
        axios
          .post('http://localhost:5000/auth/login/', data)
          .then(res => {
            if (res.data.message === 'login successfull') {
              navigate('/home')
            } else if (res.data.message === 'passoword is not matching') {
              alert('passoword is not matching')
            } else if (res.data.message === 'User does not exit') {
              alert('User does not exit')
            } else {
              alert('Something went wrong')
            }
          })
          .catch(err => {
            console.log('catch err===>', err)
          })
      } catch (err) {
        console.log('outer catch err', err)
      }
    }
  }

  return (
    <div style={{margin:10}}>
      <p style={{fontWeight:500,fontSize:18}} >Login here</p>
      <label>Email: </label>
      <input type='email' placeholder='Enter email' onChange={e => setEmail(e.target.value)} />
      <br />
      <br />
      <label>Password: </label>
      <input type='password' placeholder='Enter password' onChange={e => setPassword(e.target.value)} />
      <br />
      <br />
      <button onClick={loginClickHandler}>Login</button>
      <p>I don't have an account</p>
      <Link to='/signup'>Signup</Link>
    </div>
  )
}

export default Login
