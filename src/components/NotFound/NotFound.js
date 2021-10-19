import React from 'react';
import { useHistory } from 'react-router';
import img from "../../images/404.jpg"
import './NotFound.css'


const NotFound = () => {
    const history = useHistory();
    return (
        <div className="row w-75 mx-auto py-5 gy-3">
            <div className="col-md-6 col-12">
                <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h1 className="error-title">404</h1>
                    <h2 className="error-description">Ooops! That page doesn't exist!</h2>
                    <p className="text-para">This file May Have Been Moved or Deleted. Be Sure to Check Your Spelling.</p>
                    <button onClick={() => history.push('/home')} className="btn-regular">BACK TO HOME</button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;