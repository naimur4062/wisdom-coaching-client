import React from 'react';
import './AddReview.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import UserRating from '../UserRating/UserRating';
import { RatingContext, UserContext } from '../../../App';
import { useContext } from 'react';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const [rating, setRating] = useContext(RatingContext);
    const [signedInUser, setSignedInUser] = useContext(UserContext);

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            photo: signedInUser.photo,
            designation: data.designation,
            opinion: data.opinion,
            rating: rating
        }
        console.log(reviewData);
        const url = `http://localhost:5000/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => {
                if (res) {
                    alert('Thanks for your review');
                }
            })
    };

    return (
        <div className="mt-5">
            <h3>Review</h3>
            <div className="admin-form mt-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="admin container p-3 mb-3 mt-5">
                        <div className="p-3">
                            <div className="mb-3">
                                <input type="text" required name="name" defaultValue="" className="form-control" placeholder="Your Name" ref={register} />
                            </div>
                            <div className="mb-4">
                                <input type="text" required name="designation" defaultValue="" className="form-control" placeholder="Your Designation" ref={register} />
                            </div>
                            <div className="opinion">
                                <textarea required name="opinion" defaultValue="" className="form-control" id="" rows="3" placeholder="Your Opinion" ref={register}></textarea>
                            </div>
                        </div>
                        <div className="save-button d-flex justify-content-between">
                            <input type="submit" value="submit" />
                            <div>
                                <UserRating />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;