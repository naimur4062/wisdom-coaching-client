import React from 'react';
import AddReview from '../AddReview/AddReview';
import Sidebar from '../Sidebar/Sidebar';

const Reviews = () => {
    return (
        <div className="row">
        <div className="col-md-2 d-flex justify-content-center">
            <Sidebar/>
        </div>
        <div className="col-md-10 d-flex justify-content-center">
            <AddReview/>
        </div>
    </div>
    );
};

export default Reviews;