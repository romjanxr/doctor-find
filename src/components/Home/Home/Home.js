import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import HomeDoctors from '../HomeDoctors/HomeDoctors';
import HomeService from '../HomeService/HomeService';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <HomeService />
            <HomeDoctors />
            <AboutUs />
        </div>
    );
};

export default Home;