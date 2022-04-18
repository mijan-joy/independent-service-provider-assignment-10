import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        
        <div className="contact">
                <div className="container">
                    <div className="section-header">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-info">
                                <div className="contact-item">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <div className="contact-text">
                                        <h2>Location</h2>
                                        <p>123 Street, New York, USA</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <i className="fa fa-phone-alt"></i>
                                    <div className="contact-text">
                                        <h2>Phone</h2>
                                        <p>+012 345 67890</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <i className="fa fa-envelope"></i>
                                    <div className="contact-text">
                                        <h2>Email</h2>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-form">
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Name" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Your Email" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Message" required="required" ></textarea>
                                    </div>
                                    <div>
                                        <button className="btn" type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Contact;