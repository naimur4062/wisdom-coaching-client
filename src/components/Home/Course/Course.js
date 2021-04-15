import React from 'react';
import './Course.css';

const Course = ({ course }) => {
    return (
        <div className="card shadow-sm col-md-3 m-2 text-center">
            <div className="mt-5 cardImg">
                <img src={course.imageURL} alt="" width="80" height="80" />
            </div>
            <div className="card-body">
                <h3 style={{width: '300px', color: '#2b3c6b'}}>{course.name}</h3>
                <h5 style={{color: '#ff7162'}}>${course.price}</h5>
                <p className="card-text text-secondary mt-4">{course.description}</p>
            </div>
        </div>
    );
};

export default Course;