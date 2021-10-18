import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, title, img, description } = service;
    return (
        <Col>
            <Card className="service-card">
                <Card.Img variant="top" src={img} />
                <Card.Body className="py-5 px-3">
                    <Card.Title className="service-title">{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 140)}
                    </Card.Text>
                    <div className="read-more mt-4">
                        <Link to={`/services/${id}`}><span className="read-more-text">Read More </span><i className="fas fa-arrow-right"></i></Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;