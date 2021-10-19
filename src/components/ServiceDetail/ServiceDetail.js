import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServiceData from '../../hooks/useServiceData';
import Details from './Details';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [services] = useServiceData();
    const foundService = services?.filter(service => service.id === parseInt(serviceId));


    return (
        <div className="w-75 mx-auto mt-5">
            {
                foundService.map(service => <Details
                    key={service.id}
                    service={service}></Details>)
            }
        </div>
    );
};

export default ServiceDetail;

