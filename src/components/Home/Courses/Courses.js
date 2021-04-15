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
            <div className="row d-flex justify-content-center">
                {
                    courses.map(course => <Course course={course} />)
                }
            </div>
        </div>
    );
};

export default Courses;