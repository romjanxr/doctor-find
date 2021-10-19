import React from 'react';
import { useHistory } from 'react-router';
import './TopBanner.css'

const TopBanner = () => {
    const history = useHistory();
    return (
        <div className="banner">
            <div className="text-center">
                <h5 className="text-white">Markets & Resources</h5>
                <h1 className="title text-white">Find The Best <br /> Doctor Near By You</h1>
                <button onClick={() => history.push('/doctors')} className="btn-regular">FIND A DOCTOR  <i className="fas fa-plus ms-2"></i></button>
                <button onClick={() => history.push('/about')} className="btn-read ms-3">READ MORE  <i className="fas fa-plus ms-1"></i></button>
            </div>
        </div>
    );
};

export default TopBanner;