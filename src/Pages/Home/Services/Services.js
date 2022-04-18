import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    return (
<div  className="service">
<div id="services" className="container">
    <div className="section-header">
        <h2>My Practices Areas</h2>
    </div>
    <div className="row">
       
    {
                services.map(service =><Service
                 key={service.id}
                service={service} >
                </Service> )
            } 
    
      
      
    </div>
</div>
</div>




    );
};

export default Services;