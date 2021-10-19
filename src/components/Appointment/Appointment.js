import React from 'react';
import { useHistory } from 'react-router';
import done from '../../images/High_five.jpg'
import './Appointment.css'

const Appointment = () => {
    const history = useHistory();
    return (
        <div className="row w-75 mx-auto py-5 gy-3">
            <div className="col-md-6 col-12">
                <img className="img-fluid" src={done} alt="" />
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h1 className="appointment mb-3">Appointment Accepted</h1>
                    <p className="text-para">We will get in touch with you soon</p>
                    <button onClick={() => history.push('/home')} className="btn-regular">BACK TO HOME</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;