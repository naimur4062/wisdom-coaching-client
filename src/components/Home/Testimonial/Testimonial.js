import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import './Testimonial.css';

const Testimonial = (props) => {
    const { photo, name, designation, opinion, rating } = props.review;
    return (
        <div className="cardDiv shadow-sm col-md-3 m-2 text-center">
            <div className="mt-5 cardImage d-flex justify-content-start">
                <img src={photo} alt="" />
                <div className="name">
                    <h5>{name}</h5>
                    <h6>{designation}</h6>
                </div>
            </div>
            <div className="card-body card-details">
                <p className="card-text text-secondary">{opinion}</p>
            </div>
            <div className="testimonialRating">
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                        name="simple-controlled"
                        value={rating}
                    />
                </Box>
            </div>
        </div>
    );
};

export default Testimonial;