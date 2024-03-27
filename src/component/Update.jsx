import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateUser } from "../redux/slice"

const Update = () => {
   const {id} = useParams()
   const users = useSelector(state=>state.users)
   
   const existingUser = users.filter(f=>f.id==id) 
   const {name,email} = existingUser[0]
  //  console.log(existingUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [uname,setName] = useState(name)
  const [uemail,setEmail] = useState(email)

   const handleSUbmit=(e)=>{
       e.preventDefault() 
       
       dispatch(updateUser({id,name:uname,email:uemail}))

       navigate('/')

   }

   
  return (
    <div className="form-container">
    <h1>Update User</h1>
    <form onSubmit={handleSUbmit} >
      <div>
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          value={uname}
          onChange={(e)=>setName(e.target.value)}
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
          value={uemail}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit" className="form-button">update</button>
      </div>
    </form>
  </div>
  )
}

export default Update
