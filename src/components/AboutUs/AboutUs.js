import React from 'react';
import './AboutUs.css'
import about from '../../images/about.jpg'

const AboutUs = () => {
    return (
        <section>
            <div className="row w-75 mx-auto my-5 gy-3">
                <div className="col-md-6 col-12">
                    <img className="img-fluid" src={about} alt="" />
                </div>
                <div className="col-md-6 col-12">
                    <h2 className="error-description">Why Choose Docfind Clinic?</h2>
                    <p className="about-description">Docfind has over two decades of experience in the healthcare sector, and is known for providing quality healthcare and valuable experience to all domestic and international patients. Our healthcare offerings are supported by a team of compassionate and dedicated medical professionals who have rich knowledge and experience in their respective domains.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;