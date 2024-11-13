import React from 'react';
import './Header.css';
import { FaSearch } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link,useNavigate } from "react-router-dom";

function Header() {
  const nav = useNavigate();
  function onchange()
  {
    nav('/login')
  }
  
  return (
    <div className="header">
      <div className="header__left">
        <h1 className="header__appName">
          Meeting <span className="scheduler">Scheduler</span>
        </h1>
      </div>
      <div className="header__center">
        <input type="text" placeholder="Search here" className="header__searchInput" />
        <FaSearch />
        <span className="header__time">{new Date().toLocaleTimeString()}</span>
      </div>
      {/* <div className="header__right">
        <span className="header__link" onClick={onchange}>Login</span>
        <span className="header__link">Profile <CgProfile /></span>
        <span className="header__link">Logout <IoLogOutOutline  className='Logout'/></span>
       
      </div> */}
      <nav className="nav">
          <a href="#home" class>Home</a>
          <a href="#features" >Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
          <Link to="/login" className="login" onClick={onchange}> Sign out</Link>
        </nav>

    </div>
  );
}

export default Header;
