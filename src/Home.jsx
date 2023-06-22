import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Home() {
    const [data,setData] = useState([])
    const {id} = useParams()
    useEffect(()=>{
     axios.get('http://localhost:3000/users')
     .then(res=>setData(res.data))
     .catch(err=>console.error(err))
    },[])

    // const navigate = useNavigate()
    const handleDelete=()=>{
        const confirm = window.confirm('Are you sure you want to delete?')
        if(confirm){
            //http://localhost:3000
            axios.delete('http://localhost:3000/users/'+id)
            .then(res=>{
                // navigate('/')
               window.location.reload();
            })
            .catch(err=>console.error(err))
        }
    }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        <h1>List of Users</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>
            <div className='d-flex justify-content-end'>
                <Link to='/create' className='btn btn-success'>Add +</Link>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    data.map((d, i) =>
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.emial}</td>
                        <td>{d.phone}</td>
                        <td>{d.website}</td>
                        <td>
                            <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Read</Link >
                            <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-s'>Edit</Link>
                            <button onClick={e=>handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                        </td>
                    </tr>
                    )
                   }
                </tbody>
            </table>
        </div>
    </div>

  )
}

export default Home