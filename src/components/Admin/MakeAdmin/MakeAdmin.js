import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const adminData = { email: data.email }
        
        const url = `https://quiet-atoll-18146.herokuapp.com/addAdmin`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => {
                if (res) {
                    alert('Admin Added Successfully');
                }
            })
     };
    return (
        <div className="container-fluid row" >
            <div className="col-md-3 d-flex justify-content-center">
                <Sidebar />
            </div>
            <div className="col-md-9 d-flex justify-content-center p-4 pr-5">
                <div className="mt-5">
                    <h3>Add Admin</h3>
                    <div className="review-form mt-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="review container p-3 mb-3 mt-5">
                                <div className="mb-3">
                                    <input type="text" required name="email" defaultValue="" className="form-control" placeholder="Enter Email" ref={register} />
                                </div>
                                <div className="save-button">
                                    <input type="submit" value="submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;