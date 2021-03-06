import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div>
        <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-about">
                                <h2>About Us</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu lectus a leo tristique dictum nec non quam. Suspendisse convallis, tortor eu placerat rhoncus, lorem quam iaculis felis, sed eleifend lacus neque id eros. Integer convallis volutpat neque
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-8">
                            <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-link">
                                <h2>Services Areas</h2>
                                <li >Civil Law</li>
                                <li >Family Law</li>
                                <li >Business Law</li>
                                <li >Education Law</li>
                                <li >Immigration Law</li>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-link">
                                <h2>Useful Pages</h2>
                                <li>About Us</li>
                                <li>Practices</li>
                                <li>FAQs</li>
                                <li>Attorneys</li>
                                <li>Case Studies</li>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-contact">
                                <h2>Get In Touch</h2>
                                <p><i className="fa fa-map-marker-alt"></i>123 Street, New York, USA</p>
                                <p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
                                <p><i className="fa fa-envelope"></i>info@example.com</p>
                                <div className="footer-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-youtube"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container footer-menu">
                    <div className="f-menu">
                        <a href="">Terms of use</a>
                        <a href="">Privacy policy</a>
                        <a href="">Cookies</a>
                        <a href="">Help</a>
                        <a href="">FQAs</a>
                    </div>
                </div>
                <div className="container copyright">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; {year} All Right Reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <p>Designed By <a href ="">Mijan</a></p>
                        </div>
                    </div>
                </div>
            </div>
        
            
            <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
        </div>
    );
};

export default Footer;