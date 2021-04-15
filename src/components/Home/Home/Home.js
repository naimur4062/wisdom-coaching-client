import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Teachers from '../Teachers/Teachers';

const Home = () => {
    return (
        <div>
            <Header/>
            <Teachers/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;