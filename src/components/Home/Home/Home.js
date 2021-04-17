import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Teachers from '../Teachers/Teachers';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header/>
            <Courses/>
            <Teachers/>
            <Testimonials/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;