import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
  const [data,setData] = useState([])
  const [values,setValues] = useState({
    name:'',
    email:"",
    phone:"",
    website:""
  })
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
       e.preventDefault()
       axios.post('http:/localhost:3000/users',values)
       .then(res=>{
        console.log(res)
        navigate('/')
       })
       .catch(err=>console.log(err))
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' onChange={e=>setValues({...values,name:e.target.value})} className='form-control' placeholder='Enter name'></input>
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email:</label>
            <input type='text' name='email' onChange={e=>setValues({...values,email:e.target.value})} className='form-control' placeholder='Enter email'></input>
          </div>
          <div className='mb-2'>
            <label htmlFor='phone'>Phone:</label>
            <input type='text' name='phone' onChange={e=>setValues({...values,phone:e.target.value})} className='form-control' placeholder='Enter Phone no'></input>
          </div>
          <div className='mb-2'>
            <label htmlFor='website'>Website:</label>
            <input type='text' name='website' onChange={e=>setValues({...values,website:e.target.value})} className='form-control' placeholder='Enter site'></input>
          </div>
          <button className='btn btn-success'>Submit</button>
          <Link to='/' className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create