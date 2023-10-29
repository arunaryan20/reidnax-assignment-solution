import React, { useState } from 'react'
import {Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const navigate=useNavigate()
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [password,setPassword]=useState("")
  const [cnfpassword,setCnfPassword]=useState("")


  const signupClickHandler = () => {
    if (
      name === '' ||
      email === '' ||
      phone === '' ||
      password === '' ||
      cnfpassword === ''
    ) {
      alert('All the fields are required')
    } else {
      if (password === cnfpassword) {
        try {
          const data = {
            name: name,
            email: email,
            phone: phone,
            password: password
          }
          axios
            .post('http://localhost:5000/auth/register/', data)
            .then(res => {
              console.log('res------>', res)
              if (res.data.message === 'This email is already exist') {
                alert('This email is already exist')
              } else if (res.data.message === 'User created successfully') {
                navigate('/')
              } else {
                alert('Something went wrong')
              }
            })
            .catch(err => {
              console.log('catch err===>', err)
            })
        } catch (err) {
          console.log('outer catch error--->', err)
        }
      } else {
        alert("passoword does't match")
      }
    }
  }







  return (
    <div style={{margin:10}}>
          <p style={{fontWeight:500,fontSize:18}}>Signup here</p>
          <label>Name: </label>
         <input type="text" onChange={e=>setName(e.target.value)} placeholder='Enter name' /><br/><br/>
         <label>Phone: </label>
         <input type="text" onChange={e=>setPhone(e.target.value)} placeholder='Enter phone number' /><br/><br/>
         <label>Email: </label>
         <input type="email" onChange={e=>setEmail(e.target.value)} placeholder='Enter email' /><br/><br/>
         <label>Password: </label>
         <input type="text" onChange={e=>setPassword(e.target.value)} placeholder='Enter password' /><br/><br/>
         <label>Confirm Password: </label>
         <input type="password" onChange={e=>setCnfPassword(e.target.value)} placeholder='Re-Enter password' /><br/><br/>
         <button onClick={signupClickHandler}>Register</button>
         <p>I have already an account</p>
         <Link to="/">Login</Link>
    </div>
  )
}

export default Signup
