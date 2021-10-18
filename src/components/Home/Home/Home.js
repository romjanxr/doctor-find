import React from 'react';
import HomeService from '../HomeService/HomeService';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <HomeService />
        </div>
    );
};

export default Home;