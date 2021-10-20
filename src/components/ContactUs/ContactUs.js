import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className="pattern-bg d-flex align-items-center justify-content-center py-5 px-3">
            <div>
                <div className="text-center mb-5">
                    <h5 className="text-white">Feel Free to Contact US</h5>
                    <h1 className="title text-white">Make a Request</h1>
                </div>
                <div>
                    <Form>
                        <Form.Group className="mb-3">
                            <Row>
                                <Col>
                                    <FloatingLabel label="Full Name">
                                        <Form.Control type="text" placeholder="Full Name" />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel label="Email">
                                        <Form.Control type="email" placeholder="Email" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <FloatingLabel label="Subject">
                                <Form.Control type="text" placeholder="Subject" />
                            </FloatingLabel>
                        </Form.Group>
                        <FloatingLabel label="Message">
                            <Form.Control
                                as="textarea"
                                placeholder="Message"
                                style={{ height: '150px' }}
                            />
                        </FloatingLabel>
                    </Form>
                    <button className="btn-regular">SEND REQUEST</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;