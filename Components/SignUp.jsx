import React from 'react'
import './SignUp.css'
import { FaUser ,FaLock, FaEnvelope } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";

const LoginForm = () => {
  const nav = useNavigate();
  function changepage()
  {
    nav('/login')
  }
  return (
    <div className='wrapper'>
    <form action="">

      <h1>SignUp</h1>

      <div className="input-box">
        <input type='text' placeholder='Username' required />
        <FaUser className='icon' />
      </div>

      <div className="input-box">
        <input type='email' placeholder='Email' required />
        <FaEnvelope className='icon' />
      </div>
      <div className="input-box">
        <input type='password' placeholder='Password' required />
        <FaLock className='icon' />
      </div>

      <div className="remember-forgot">
        <label><input type='checkbox' className='check'/>I accept terms & conditions </label>
        {/* <a href="#">Forgot password?</a> */}
      </div>
      <button type='submit' onClick={changepage}>SignUp</button>

      <div className="register-link">
        <p>Already have an account?<Link to="/login" >Login</Link></p>
      </div>
    </form>
    </div>
  )
}

export default LoginForm
