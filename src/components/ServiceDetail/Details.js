import React from 'react';

const Details = ({ service }) => {
    const { title, img, description } = service;
    return (
        <div className="row gy-5">
            <div className="col-md-6 col-12">
                <h2 className="detail-title mb-3">{title}</h2>
                <p>{description}</p>
                <button className="btn-regular">MAKE AN APPOINTMENT <i className="far fa-calendar-check ms-1"></i></button>
            </div>
            <div className="col-md-6 col-12">
                <img className="img-fluid" src={img} alt="" />
            </div>
        </div>
    );
};

export default Details;