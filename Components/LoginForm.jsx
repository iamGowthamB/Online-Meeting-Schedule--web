// import React from 'react'
// import './LoginForm.css'
// import axios from 'axios';
// import { FaUser ,FaLock } from "react-icons/fa";
// import { Link,useNavigate} from "react-router-dom";

// const LoginForm = () => {
// const nav=useNavigate();
// function onchange() {
//   // Get user input values
//   const usernameInput = document.getElementById('username').value;
//   const passwordInput = document.getElementById('password').value;

//   // Fetch users from the JSON server
//   axios.get('http://localhost:3001/users')
//     .then(response => {
//       const users = response.data;

//       // Check if the entered credentials match any user
//       const user = users.find(user => 
//         user.username == usernameInput && user.password == passwordInput
//       );

//       if (user) {
//         console.log('Login successful!');
//         nav('/home'); // Redirect to home page
//       } else {
//         console.error('Invalid username or password');
//         alert('Invalid username or password. Please try again.');
//       }
//     })
//     .catch(error => {
//       console.error('Error fetching users:', error);
//       alert('An error occurred while trying to log in.');
//     });
// }

//   return (
//     <div className='wrapper'>
//     <form action="">

//       <h1>Login</h1>

//       <div className="input-box">
//         <input type='text' id="username" placeholder='Username' required className='abc' />
//         <FaUser className='icon' />
//       </div>

//       <div className="input-box">
//         <input type='password' id="password"placeholder='Password' required />
//         <FaLock className='icon' />
//       </div>

//       <div className="remember-forgot">
//         <label><input type='checkbox'/>Remember me </label>
//         <a href="#">Forgot password?</a>
//       </div>
//       <button type='submit' onClick={onchange}>Login</button>

//       <div className="register-link">
//         <p>Don't have an account? <Link to="/signup" >SignUp</Link></p>
       

//       </div>
//     </form>
//     </div>
//   )
// }

// export default LoginForm;

import React from 'react';
import './LoginForm.css';
import axios from 'axios';
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const nav = useNavigate();

  const onchange = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get user input values
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Fetch users from the JSON server
    axios.get('http://localhost:3001/users')
      .then(response => {
        const users = response.data;

        // Check if the entered credentials match any user
        const user = users.find(user =>
          user.username === usernameInput && user.password === passwordInput
        );

        if (user) {
          console.log('Login successful!');
          nav('/home'); // Redirect to home page
        } else {
          console.error('Invalid username or password');
          alert('Invalid username or password. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        alert('An error occurred while trying to log in.');
      });
  }

  return (
    <div className='wrapper'>
      <form onSubmit={onchange}> {/* Use onSubmit here */}
        <h1>Login</h1>

        <div className="input-box">
          <input type='text' id="username" placeholder='Username' required className='abc' />
          <FaUser className='icon' />
        </div>

        <div className="input-box">
          <input type='password' id="password" placeholder='Password' required />
          <FaLock className='icon' />
        </div>

        <div className="remember-forgot">
          <label><input type='checkbox' /> Remember me </label>
          <a href="#">Forgot password?</a>
        </div>
        
        <button type='submit'>Login</button> {/* No need for onClick here */}

        <div className="register-link">
          <p>Don't have an account? <Link to="/signup">SignUp</Link></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;
