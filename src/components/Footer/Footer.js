import React from 'react';
import { Form } from 'react-bootstrap';
import footerImg from '../../images/footer-logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-light p-5">
            <div className="row w-75 mx-auto">
                <div className="col-md-4">
                    <img src={footerImg} alt="" />
                    <br />
                    <p className="text mt-3">Docfind has over two decades of experience in the healthcare sector</p>
                </div>
                <div className="col-md-4">
                    <h3 className="service-title">Services</h3>
                    <p className="text mt-3">Therapiya</p>
                    <p className="text">Dentistry</p>
                    <p className="text">Virusology</p>
                    <p className="text">Pharmocology</p>
                    <p className="text">Cardiology</p>
                </div>
                <div className="col-md-4">
                    <h3 className="service-title mb-3">Subscribe</h3>
                    <Form.Control size="lg" type="text" placeholder="Your Email" />
                    <button className="btn-regular my-3 w-100">SUBSCRIBE</button>
                    <p className="text">Get The Latest Updates via email. Any time you may unsubscribe</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;