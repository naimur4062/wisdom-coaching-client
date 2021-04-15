import React from 'react';
import AddCourse from '../AddCourse/AddCourse';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    return (
        <div className="row">
            <div className="col-md-2 d-flex justify-content-center">
                <Sidebar/>
            </div>
            <div className="col-md-10 d-flex justify-content-center">
                <AddCourse/>
            </div>
        </div>
    );
};

export default Admin;