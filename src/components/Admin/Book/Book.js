import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';
import './Book.css';

const Book = () => {
    const [course, setCourse] = useState([]);
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/course/${id}`)
            .then(res => res.json())
            .then(data => {
                setCourse(data[0])
            })
    }, [id]);

    const handlePayment = (payment) => {
        const bookingDetails = { course: course, ...signedInUser, payment }
        console.log(bookingDetails)
        
        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
          })
            .then(res => res.json())
            .then(data => {
              if (data) {
                alert('You buy the course successfully')
              }
            })
    }

    return (
        <div className="row">
            <div className="col-md-3 d-flex justify-content-center">
                <Sidebar />
            </div>
            <div className="col-md-9 booking-details">
                <h4>Please, pay the charge to continue the course</h4>
                <div>
                    <div>
                        <p>{signedInUser.name}</p>
                        <p>{signedInUser.email}</p>
                        <p>{course.name}</p>
                        <p>{course.price}</p>
                    </div>
                    <div style={{ width: '500px' }}>
                        <ProcessPayment handlePayment={handlePayment} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;