import React from 'react';
import expert1 from '../../../images/experts/team-1.jpg';
import expert2 from '../../../images/experts/team-2.jpg';
import expert3 from '../../../images/experts/team-3.jpg';
import expert4 from '../../../images/experts/team-4.jpg';
import Expert from '../Expert/Expert';
import './Experts.css';


const experts =[
    {id: 1, name: 'Will Smith',description: 'Business Consultant', img: expert1},
    {id: 2, name: 'John Smith',description: 'Criminal Consultant', img: expert2},
    {id: 3, name: 'Gloria Edwards', description: 'Divorce Consultant', img: expert3},
    {id: 4, name: 'Messi Smith',description: 'Immigration Consultant', img: expert4},
    
]

const Experts = () => {
    return (

        <div className="team">
                <div className="container">
                    <div className="section-header">
                        <h2>Meet Our Expert Attorneys</h2>
                    </div>
                    <div className="row">
                        
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