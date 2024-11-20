/* eslint-disable react/prop-types */
import './index.css'
import User from "../User/index.jsx";
function UserList(props) {
  const {users} = props;
  return (
    <div className='wrappers'>
      {
        users.length > 0 && users.map((user, index) =>{
          return (
            <User key={index} user={user}></User>
          )
        })
      }
    </div>
  )
}

export default UserList;
