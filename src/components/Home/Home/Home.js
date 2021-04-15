import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Teachers from '../Teachers/Teachers';

const Home = () => {
    return (
        <div>
            <Header/>
            <Courses/>
            <Teachers/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;