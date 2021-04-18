import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import edit from '../../../images/edit.png';
import trash from '../../../images/trash.png';
import './ManageServices.css';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://quiet-atoll-18146.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services]);

    const deleteProduct = id => {
        fetch(`https://quiet-atoll-18146.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                alert('Delete Successful')
            })
    }
    return (
        <div className="container-fluid row" >
            <div className="col-md-3 d-flex justify-content-center">
                <Sidebar />
            </div>
            <div className="col-md-9 d-flex justify-content-center p-4 pr-5">
                <div className="container p-4" style={{ background: 'lightblue', height: '90vh', borderRadius: '8px' }}>
                    <div className="row pt-3 ps-3 d-flex justify-content-between" style={{ background: 'lightgrey', borderRadius: '10px' }}>
                        <p className="col-md-3">Name</p>
                        <p className="col-md-3">Price</p>
                        <p className="col-md-3">Edit</p>
                        <p className="col-md-3">Delete</p>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mt-3">
                            {
                                services.map(service => <p>{service.name}</p>)
                            }
                        </div>
                        <div className="col-md-3 mt-3">
                            {
                                services.map(service => <p>{service.price}</p>)
                            }
                        </div>
                        <div className="col-md-3 mt-3 edit">
                            {
                                services.map(service => <img src={edit} alt="" />)
                            }
                        </div>
                        <div className="col-md-3 mt-3 delete">
                            {
                                services.map(service =>
                                    <img onClick={() => deleteProduct(service._id)} src={trash} alt="" />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageServices;