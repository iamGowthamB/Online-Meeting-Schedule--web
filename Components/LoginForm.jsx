import React from 'react'
import './LoginForm.css'
import { FaUser ,FaLock } from "react-icons/fa";
import { Link,useNavigate} from "react-router-dom";

const LoginForm = () => {
const nav=useNavigate();
function onchange()
{
  nav('/home');
}

  return (
    <div className='wrapper'>
    <form action="">

      <h1>Login</h1>

      <div className="input-box">
        <input type='text' placeholder='Username' required />
        <FaUser className='icon' />
      </div>

      <div className="input-box">
        <input type='password' placeholder='Password' required />
        <FaLock className='icon' />
      </div>

      <div className="remember-forgot">
        <label><input type='checkbox'/>Remember me </label>
        <a href="#">Forgot password?</a>
      </div>
      <button type='submit' onClick={onchange}>Login</button>

      <div className="register-link">
        <p>Don't have an account? <Link to="/signup" >SignUp</Link></p>
       

      </div>
    </form>
    </div>
  )
}

export default LoginForm
