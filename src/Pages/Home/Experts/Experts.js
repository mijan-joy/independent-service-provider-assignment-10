import React from 'react';
import expert1 from '../../../images/experts/team-1.jpg';
import expert2 from '../../../images/experts/team-2.jpg';
import expert3 from '../../../images/experts/team-3.jpg';
import expert4 from '../../../images/experts/team-4.jpg';
import Expert from '../Expert/Expert';
import './Experts.css';


const experts =[
    {id: 1, name: 'Will Smith', img: expert1},
    {id: 2, name: 'John Smith', img: expert2},
    {id: 3, name: 'Doe Smith', img: expert3},
    {id: 4, name: 'Messi Smith', img: expert4},
    
]

const Experts = () => {
    return (

        <div class="team">
                <div class="container">
                    <div class="section-header">
                        <h2>Meet Our Expert Attorneys</h2>
                    </div>
                    <div class="row">
                        
                    {
                    experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
                }
                      
                    
                    </div>
                </div>
            </div>
    );
};

export default Experts;