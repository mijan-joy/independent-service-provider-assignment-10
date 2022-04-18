import React from 'react';
import { NavLink } from 'react-router-dom';
import './Expert.css';

const Expert = ({expert}) => {
    const {name,description, img} = expert;

    return (
    
 <div className="col-lg-3 col-md-6">
                            <div className="team-item">

                            <div className="team-img">
                                <img src={img} alt="" />
                            </div>
                               
                                <div className="team-text">
                                    <h2>{name}</h2>
                                    <p>{description}</p>
                                    <div className="team-social">
                                        <NavLink
                                         className="social-tw" to="/"><i className="fab fa-twitter"></i></NavLink>
                                        <NavLink
                                         className="social-in" to="/"><i className="fab fa-instagram"></i></NavLink>
                                        <NavLink
                                         className="social-fb" to="/"><i className="fab fa-facebook-f"></i></NavLink>
                                        <NavLink
                                         className="social-li" to="/"><i className="fab fa-linkedin-in"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

    );
};

export default Expert;