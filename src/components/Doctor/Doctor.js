import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css'

const Doctors = ({ doctor }) => {
    const { title, designation, location, img } = doctor;
    return (
        <Col>
            <Card className="service-card">
                <Card.Img variant="top" src={img} />
                <Card.Body className="py-5 px-3">
                    <Card.Body>
                        <Card.Title className="service-title">{title}</Card.Title>
                        <div className="text-warning">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <span className="ms-2 text-dark">(5)</span>
                        </div>
                        <h3 className="designation">{designation}</h3>
                        <span className="mt-2"><i className="fas fa-map-marker-alt location-icon"></i> {location}</span>
                    </Card.Body>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctors;