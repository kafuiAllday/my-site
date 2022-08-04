import { useEffect, useReducer, useState } from 'react'
import {Link} from 'react-router-dom'
import Useritem from './Useritem'

function User() {
  const [users, setUsers] = useState([])
       
useEffect(() => {
  fetchUsers()
},[])

const fetchUsers =async() => {
  const res = await fetch('https://api.github.com/users')
  const data = await res.json()
  setUsers(data)
  }



  return (
  
    <div>
      <h2>the users pages</h2>   
      {users.map((user) => (
        <Useritem user={user} key={user.id}   />
      ))}
      <Link to='/'>home</Link>
    </div>
  )  

}
export default User
