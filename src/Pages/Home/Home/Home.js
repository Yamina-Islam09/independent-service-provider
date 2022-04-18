import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            
            <Services></Services>
            <CustomerReviews></CustomerReviews>
        </>
    );
};

export default Home;