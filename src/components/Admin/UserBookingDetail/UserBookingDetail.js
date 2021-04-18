import React from 'react';
import './UserBookingDetail.css';

const UserBookingDetail = (props) => {
    const { imageURL, name, description } = props.userBooking.course;
    console.log(props.userBooking.status)
    return (
        <div style={{padding: '0 5px'}} className="col-md-4">
            <div className="cardDiv shadow p-3 mb-5 bg-body">
                <div className="card-title d-flex justify-content-between">
                    <img src={imageURL} alt="" className="fluid" />
                    <h6>{props.userBooking.status}</h6>
                </div>
                <div className="card-details">
                    <h5>{name}</h5>
                    <h6 style={{ height: '80px', color: 'gray' }}>
                        <small>{description}</small>
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default UserBookingDetail;

