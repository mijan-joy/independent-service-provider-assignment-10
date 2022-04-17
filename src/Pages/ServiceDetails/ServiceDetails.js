import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId, name } = useParams();
  
  return (
    <div className="container mt-4">
      <h2>Service Details</h2>
      <h2>Welcome to Detail: {serviceId}</h2>
      <h2>Welcome to Detail: {name}</h2>
      <div className="text-center">
        <Link to={`/checkout`}>
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
