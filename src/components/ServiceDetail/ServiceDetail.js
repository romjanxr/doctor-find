import React from 'react';
import { useParams } from 'react-router';
import useServiceData from '../../hooks/useServiceData';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const { services } = useServiceData();
    const foundService = services?.filter(service => service.id === parseInt(serviceId));
    const { title, description, img } = foundService[0];

    return (
        <div className="w-75 mx-auto mt-5">
            <div className="row gy-5">
                <div className="col-md-6 col-12">
                    <h2 className="detail-title mb-3">{title}</h2>
                    <p>{description}</p>
                    <button className="btn-regular">MAKE AN APPOINTMENT <i className="far fa-calendar-check ms-1"></i></button>
                </div>
                <div className="col-md-6 col-12">
                    <img className="img-fluid" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;

