import React from 'react'
import axios from 'axios';
import './SignUp.css'
import { FaUser ,FaLock, FaEnvelope } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";

const LoginForm = () => {
  const nav = useNavigate();
  function changepage() {
    // Get user input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Create user object
    const user = {
      username: username,
      email: email,
      password: password
    };
  
    // Send POST request to JSON server
    axios.post('http://localhost:3001/users', user)
      .then(response => {
        console.log('User added:', response.data);
        // Optionally redirect or show success message
       nav('/login')
      })
      .catch(error => {
        console.error('There was an error adding the user!', error);
        // Optionally show an error message
      });
  }
  return (
    <div className='wrapper'>
    <form action="">

      <h1>SignUp</h1>

      <div className="input-box">
        <input type='text' id="username" placeholder='Username' required  className='abc'/>
        <FaUser className='icon' />
      </div>

      <div className="input-box">
        <input type='email' id="email" placeholder='Email' required />
        <FaEnvelope className='icon' />
      </div>
      <div className="input-box">
        <input type='password' id="password" placeholder='Password' required />
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

export default LoginForm;
