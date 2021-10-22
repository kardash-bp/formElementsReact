import React from 'react'
const User = (props) => {
  const user = props.location.state
  return (
    <div>
      {user && Object.keys(user).length > 0 ? (
        <div>
          <h3>{user.name}</h3>
          <p>{user.msg}</p>
        </div>
      ) : null}
    </div>
  )
}

export default User
