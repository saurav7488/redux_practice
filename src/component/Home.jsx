import { useDispatch, useSelector } from "react-redux"
import '../Style/Home.css'
import { Link } from "react-router-dom"
import { deleteUser } from "../redux/slice"
const Home = () => {
    const user = useSelector(state=>state.users)
    const dispatch = useDispatch()
    const handleDelete=(id)=>{
          dispatch(deleteUser({id}))
    }
  return (
    <div className="container" >
        <h1>Crud App with JSON Server</h1> 
        <Link to={'/create'} className="btn btn-success my-3" >Create</Link>
        <table className="table" >
              <thead>
                    <tr>
                         <th>ID</th>
                         <th>Name</th>
                         <th>Email</th>
                         <th>Action</th>
                    </tr>
              </thead>
              <tbody>
                   {
                       user.map((users,i)=>(
                           <tr key={i} >
                                <td>{users.id}</td>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>
                                      <Link to={`/edit/${users.id}`} >Edit</Link>
                                      <button onClick={()=>handleDelete(users.id)} >Delete</button>
                                </td>
                           </tr>
                       ))
                   }
              </tbody>
        </table>
    </div>
  )
}

export default Home
