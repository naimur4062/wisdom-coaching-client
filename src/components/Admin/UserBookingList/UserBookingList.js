import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import UserBookingDetail from '../UserBookingDetail/UserBookingDetail';

const UserBookingList = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const [userBookings, setUserBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/userBookings?email=' + signedInUser.email)
            .then(res => res.json())
            .then(data => setUserBookings(data))
    }, [])
    return (
        <div className="row">
            <div className="col-md-3 d-flex justify-content-center">
                <Sidebar />
            </div>
            <div className="col-md-9 booking-details">
                <div className="mt-5 mb-5">
                    <h4 style={{ color: '#3a4256' }}>Dear, {signedInUser.name}</h4>
                    <h6 style={{ color: 'gray'}}>This is your course list</h6>
                </div>
                <div className="row container">
                    {
                        userBookings.map(userBooking => <UserBookingDetail userBooking={userBooking} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default UserBookingList;