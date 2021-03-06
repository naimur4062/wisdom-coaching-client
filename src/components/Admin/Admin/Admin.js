import React from 'react';
import AddCourse from '../AddCourse/AddCourse';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    return (
        <div className="container-fluid row" >
            <div className="col-md-3 d-flex justify-content-center">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 d-flex justify-content-center p-4 pr-5">
                <AddCourse/>
            </div>
        </div>
    );
};

export default Admin;