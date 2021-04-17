import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
  
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="carouselDiv mt-5">
            <h1 style={{color: '#ff4880'}} className="text-center mb-5">Testimonials</h1>
            <div className="row d-flex justify-content-center">
                {
                    reviews.map(review => <Testimonial review={review} />)
                }
            </div>
        </div>
    );
};

export default Testimonials;