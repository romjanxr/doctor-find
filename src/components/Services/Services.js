import React from 'react';
import { Row } from 'react-bootstrap';
import useServiceData from '../../hooks/useServiceData';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServiceData();
    return (
        <div className="w-75 mx-auto my-5">
            <div className="text-center mt-5">
                <h5 className="up-title">What We do</h5>
                <h3 className="section-title">Our Services</h3>
            </div>
            <div>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}></Service>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;