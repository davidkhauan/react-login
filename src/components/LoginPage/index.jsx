import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='login-container'>
        <h1>Login page</h1>
        <button>
          <Link to='/'>Home</Link>
        </button>
        <button>
          <Link to='/register'>Register</Link>
        </button>
    </div>
  )
}

export default index