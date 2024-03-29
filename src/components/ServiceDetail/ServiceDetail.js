import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useServiceData from '../../hooks/useServiceData';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [services] = useServiceData();
    const [service, setService] = useState({});
    const history = useHistory();

    useEffect(() => {
        const foundService = services?.find(service => service.id === parseInt(serviceId));
        setService(foundService);
    }, [serviceId, services]);

    return (
        <div className="w-75 mx-auto my-5">
            <div className="row gy-5">
                <div className="col-md-6 col-12">
                    <h2 className="detail-title mb-3">{service?.title}</h2>
                    <p>{service?.description}</p>
                    <button onClick={() => history.push('/appointment')} className="btn-regular">MAKE AN APPOINTMENT <i className="far fa-calendar-check ms-1"></i></button>
                </div>
                <div className="col-md-6 col-12">
                    <img className="img-fluid" src={service?.img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;

