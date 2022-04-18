import React from 'react';
import profile from '../../images/profile.jpg';
import './About.css';
const About = () => {
    return (
       <>
 <div>
             <div className="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about_img">
                                <img src={profile} alt=""/>
                                </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="section-header">
                                <h2>Learn About Us</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                                </p>
                                <button className="btn" href="">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          
       </>
    );
};

export default About;