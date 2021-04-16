import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [courses]);

    return (
        <div>
            <div className="courses-title d-flex justify-content-center mb-5">
                <h1 style={{color: '#3a4256'}}>Choose Your Dream</h1>
            </div>
            <div className="row d-flex justify-content-center">
                {
                    courses.map(course => <Course course={course} />)
                }
            </div>
        </div>
    );
};

export default Courses;