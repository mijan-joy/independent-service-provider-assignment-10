import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Footer></Footer>
        </>
    );
};

export default Home;