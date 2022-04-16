import React from 'react';
import './Expert.css';

const Expert = ({expert}) => {
    const {name, img} = expert;

    return (
    
 <div class="col-lg-3 col-md-6">
                            <div class="team-item">

                            <div class="team-img">
                                <img src={img} alt="" />
                            </div>
                               
                                <div class="team-text">
                                    <h2>{name}</h2>
                                    <p>Business Consultant</p>
                                    <div class="team-social">
                                        <a class="social-tw" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="social-li" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

    );
};

export default Expert;