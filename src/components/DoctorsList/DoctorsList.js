import React from 'react';
import { Row } from 'react-bootstrap';
import useDoctors from '../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

const DoctorsList = () => {
    const [doctors] = useDoctors();
    return (
        <div className="w-75 mx-auto my-5">
            <div className="text-center mt-5">
                <h5 className="up-title">Best Qualified Doctors</h5>
                <h3 className="section-title">Our Doctors</h3>
            </div>
            <div>
                <Row xs={1} md={3} className="g-4">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}></Doctor>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default DoctorsList;