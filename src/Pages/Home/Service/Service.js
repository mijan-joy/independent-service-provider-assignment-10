import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateToServicesDetails = () => {
        navigate(`/service/${id}`);
    };
    return (
     


<div className="col-lg-4 col-md-6">
<div className="service-item">
    <div className="service-icon">
        <img className="service-icon" src={img} alt="" />
        {/* <i className="fa fa-landmark"></i> */}
    </div>
    <h3>{name}</h3>
    <p>
        {description}
    </p>
    <p><small>{price}</small></p>
    <button className="btn" onClick={()=> navigateToServicesDetails(id)}>Learn More</button>
</div>
</div>



    );
};

export default Service;