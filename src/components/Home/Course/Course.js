import React from 'react';
import './Course.css';
import contract from '../../../images/contract.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    return (
        <div className="card shadow-sm col-md-3 col-sm-6 col-12 m-2 text-center">
            <div className="mt-5 cardImg">
                <img src={course.imageURL} alt="" width="80" height="80" />
            </div>
            <div className="card-body card-details">
                <h3 style={{ width: '300px', color: '#2b3c6b' }}>{course.name}</h3>
                <h5 style={{color: '#ff4880'}}>${course.price}</h5>
                <p className="card-text text-secondary mt-4">{course.description}</p>
            </div>
            <div className="enroll-div">
                <img src={contract} alt="" />
                <div className="enroll-btn">
                    <Link to={`/course/${course._id}`}>
                    <button className="enroll">Enroll Course <FontAwesomeIcon icon={faArrowRight} className="enroll-icon fas faArrowRight fa-lg" /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Course;