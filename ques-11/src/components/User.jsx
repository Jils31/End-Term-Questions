import React, { use, useContext } from 'react'
import { AuthContext } from './AuthContext'
import { createContext } from 'react'

function User() {
    const {isAuthenticated, login, logout} = useContext(AuthContext)
  return (
    <div>
      <button onClick = {isAuthenticated ? logout : login}>{isAuthenticated === true ? "Logout" : "Login"}</button>
      {isAuthenticated === true ? "Logout" : "Login"}
    </div>
  )
}

export default User
