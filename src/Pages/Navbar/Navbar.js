import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../Firebase.init";
import "./Navbar.css";

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSingOut = () => {
        signOut(auth);
    }
  return (
    <>
      <div className="top-bar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <a href="/">
                  <h1>Kanun</h1>
                  {/* <img src="img/logo.jpg" alt="Logo"> */}
                </a>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="top-bar-right">
                <div className="text">
                  <h2>8:00 - 9:00</h2>
                  <p>Opening Hour Mon - Fri</p>
                </div>
                <div className="text">
                  <h2>+123 456 7890</h2>
                  <p>Call Us For Free Consultation</p>
                </div>
                <div className="social">
                  <Link to="">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link to="">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-bar">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <Link to="/" className="navbar-brand">
              MENU
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto">
                <NavLink style={({isActive})=>{return {borderBottom:  isActive ? '2px solid #aa9166' : ''}}} to="/" className="nav-item nav-link">
                  Home
                </NavLink>

                <NavLink style={({isActive})=>{return {borderBottom:  isActive ? '2px solid #aa9166' : ''}}} to="home#services" className="nav-item nav-link">
                  Services
                </NavLink>
                <NavLink style={({isActive})=>{return {borderBottom:  isActive ? '2px solid #aa9166' : ''}}} className="nav-item nav-link" to="/about">
                  About
                </NavLink>

                <NavLink  style={({isActive})=>{return {borderBottom:  isActive ? '2px solid #aa9166' : ''}}} to="/blog" className="nav-item nav-link ">
                  Blog
                </NavLink>

                <NavLink style={({isActive})=>{return {borderBottom:  isActive ? '2px solid #aa9166' : ''}}} to="/contact" className="nav-item nav-link">
                  Contact
                </NavLink>
              </div>
              <div className="ml-auto">
              {
        user ?
          <Link className="btn" onClick={handleSingOut}>
           <i className="far fa-user"> </i> Sign Out</Link>
        :
        <Link className="btn" as={Link} to ="login">
      <i className="far fa-user"></i> Login
      </Link>}
                
        
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
