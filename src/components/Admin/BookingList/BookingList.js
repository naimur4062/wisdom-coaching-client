import React, { useEffect, useState } from 'react';
import BookingListDetails from '../BookingListDetails/BookingListDetails';
import Sidebar from '../Sidebar/Sidebar';
import './BookingList.css';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    return (
        <div className="row">
            <div className="col-md-3 d-flex justify-content-center">
                <Sidebar />
            </div>
            <div className="container bookingDiv mt-4 col-md-9">
                <h3>Booking List</h3>
                <div className="booking shadow mb-3 mt-5 bg-body">
                    <div className="booking-heading container d-flex justify-content-between">
                        <h5>Name</h5>
                        <h5>Email Id</h5>
                        <h5>Courses</h5>
                        <h5>Pay With</h5>
                        <h5>Status</h5>
                    </div>
                    <div className="bookingDetails">
                        {
                            bookings.map(booking => <BookingListDetails booking={booking} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;