import React, { useEffect, useState } from 'react';
import DropDown from '../DropDown/DropDown';
import Sidebar from '../Sidebar/Sidebar';
import './BookingList.css';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://quiet-atoll-18146.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [bookings]);

    return (
        <div className="container-fluid row" >
            <div className="col-md-3 d-flex justify-content-center">
                <Sidebar />
            </div>
            <div className="col-md-9 d-flex justify-content-center p-4 pr-5">
                <div className="container booking shadow mb-3 mt-5 bg-body p-4" style={{ height: '90vh', borderRadius: '8px' }}>
                    <div className="row pt-3 ps-3 d-flex justify-content-between booking-heading">
                        <p className="col-md-2">Name</p>
                        <p className="col-md-2">Email</p>
                        <p className="col-md-2">Courses</p>
                        <p className="col-md-2">Pay With</p>
                        <p className="col-md-2">Status</p>
                    </div>
                    <div className="row">
                        <div className="col-md-2 mt-3">
                            {
                                bookings.map(booking => <p>{booking.name}</p>)
                            }
                        </div>
                        <div className="col-md-2 mt-3">
                            {
                                bookings.map(booking => <p>{booking.email}</p>)
                            }
                        </div>
                        <div className="col-md-2 mt-3 course-name">
                            {
                                bookings.map(booking => <p>{booking.course.name}</p>)
                            }
                        </div>
                        <div className="col-md-2 mt-3 course-payment">
                            {
                                bookings.map(booking => <p>{booking.payment}</p>)
                            }
                        </div>
                        <div className="col-md-2 mt-3 course-status">
                            {
                                bookings.map(booking => <DropDown booking={booking} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;