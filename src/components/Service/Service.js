import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { title, img, description } = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body className="py-5 px-3">
                    <Card.Title className="service-title">{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 150)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;