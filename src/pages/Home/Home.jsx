import React from 'react';
import Banner from '../../component/Banner/Banner';
import HowItWork from '../../component/HowItWork/HowItWork';
import Benifit from '../../component/Benefit/Benifit';
import FeaturedFoods from '../../component/FeaturedFood/FeaturedFoods';
import Reviews from '../../component/Reviews/Reviews';

const Home = () => {
    return (
        <>
        <title>ShareBite || Home</title>
        <Banner></Banner>
        <FeaturedFoods></FeaturedFoods>
        <HowItWork></HowItWork>
        <Benifit></Benifit>
        <Reviews></Reviews>
        </>
    );
};

export default Home;