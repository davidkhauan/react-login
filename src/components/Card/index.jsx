import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import LoginPage from '../LoginPage'
import RegisterPage from '../RegisterPage'

const index = () => {
  return (
    <div className='card-container'>
      <div className="card-content">
        <h1>Welcome User</h1>
        <p>Please, select your destiny</p>

        <div className="btn-container">
          <button>
            <Link to='/login'>
              <span>Login</span>
            </Link>
          </button>
          <button>
            <Link to='/register'>
              <span>Register</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default index