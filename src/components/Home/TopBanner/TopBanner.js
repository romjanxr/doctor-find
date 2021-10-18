import React from 'react';
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className="banner">
            <div className="text-center">
                <h5 className="text-white">Markets & Resources</h5>
                <h1 className="title text-white">Find The Best <br /> Doctor Near By You</h1>
                <button className="btn-regular">FIND A DOCTOR  <i className="fas fa-plus ms-2"></i></button>
                <button className="btn-read ms-3">READ MORE  <i className="fas fa-plus ms-1"></i></button>
            </div>
        </div>
    );
};

export default TopBanner;