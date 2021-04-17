import React from 'react';
import './BookingListDetails.css';

const BookingListDetails = (props) => {
    const { name, email, payment } = props.booking;
    const course = props.booking.course.name;

    return (
        <div>
            <div className="container d-flex justify-content-between">
                <p className="name">{name}</p>
                <p className="email">{email}</p>
                <p className="course">{course}</p>
                <p className="payment">{payment}</p>
                <div className="update">
                    <p>pending</p>
                </div>
            </div>
        </div>
    );
};

export default BookingListDetails;