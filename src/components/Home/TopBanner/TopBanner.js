import React from 'react';
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className="banner">
            <div className="text-center">
                <h5 className="text-white">Markets & Resources</h5>
                <h1 className="title text-white">Find The Best <br /> Doctor Near By You</h1>
                <button className="btn-regular">FIND A DOCTOR  <i className="fas fa-plus"></i></button>
            </div>
        </div>
    );
};

export default TopBanner;