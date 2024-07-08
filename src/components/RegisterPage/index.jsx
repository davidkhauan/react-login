import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='register-container'>
        <h1>Register Page</h1>
        <button>
          <Link to='/'>Home</Link>
        </button>
        <button>
          <Link to='/login'>Login</Link>
        </button>
    </div>
  )
}

export default index