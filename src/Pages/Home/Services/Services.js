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
<div  class="service">
<div id="services" class="container">
    <div class="section-header">
        <h2>Our Practices Areas</h2>
    </div>
    <div class="row">
       
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