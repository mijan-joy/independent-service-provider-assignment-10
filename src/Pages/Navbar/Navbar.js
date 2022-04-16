import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
             <>
<div class="top-bar">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="logo">
                                <a href="/">
                                    <h1>Kanun</h1>
                                     {/* <img src="img/logo.jpg" alt="Logo"> */}
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="top-bar-right">
                                <div class="text">
                                    <h2>8:00 - 9:00</h2>
                                    <p>Opening Hour Mon - Fri</p>
                                </div>
                                <div class="text">
                                    <h2>+123 456 7890</h2>
                                    <p>Call Us For Free Consultation</p>
                                </div>
                                <div class="social">
                                    <a href=""><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


 <div class="nav-bar">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                        <a href="#" class="navbar-brand">MENU</a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav mr-auto">
                                <a href="#index.html" class="nav-item nav-link active">Home</a>
                                <a href="#about.html" class="nav-item nav-link">About</a>
                                <a href="#service.html" class="nav-item nav-link">Practice</a>
                                <a href="#team.html" class="nav-item nav-link">Attorneys</a>
                                <a href="#portfolio.html" class="nav-item nav-link">Case Studies</a>
                                <a href="#blog.html" class="nav-item nav-link">Blog</a>
                               
                                <a href="contact.html" class="nav-item nav-link">Contact</a>
                            </div>
                            <div class="ml-auto">
                                <a class="btn" href="https://htmlcodex.com/law-firm-website-template">Get Appointment</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>


             </>
        
            
    );
};

export default Navbar;