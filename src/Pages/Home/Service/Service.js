import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, img, description} = service;
    const navigate = useNavigate();
    const navigateToServicesDetails = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        // <div className="service border-primary">
            
        //     <h2>{name}</h2>
        //     <p>{price}</p>
        //     <p><small>{description}</small></p>
        //     <button onClick={()=> navigateToServicesDetails(id)} className="btn btn-primary">Book: {name}</button>
        // </div>

<div class="col-lg-4 col-md-6">
<div class="service-item">
    <div class="service-icon">
        {/* <i class="fa fa-landmark"></i> */}
        <img src={img} alt="" />
    </div>
    <h3>{name}</h3>
    <p>
        {description}
    </p>
    <button class="btn" onClick={()=> navigateToServicesDetails(id)}>Learn More</button>
</div>
</div>
    );
};

export default Service;