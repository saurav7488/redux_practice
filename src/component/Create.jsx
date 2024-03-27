import { useState } from 'react'
import '../Style/Create.css'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../redux/slice'
import { useNavigate } from 'react-router-dom'
const Create = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    const dispatch = useDispatch()
    const users = useSelector((state)=>state?.users)
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
         e.preventDefault() 
         dispatch(addUser({id:users[users.length-1].id+1,name,email}))
         navigate('/')

    }

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={e=>setName(e.target.value)}
          className="form-input"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          onChange={e=>setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit" className="form-button">Submit</button>
      </div>
    </form>
  </div>

  )
}

export default Create
