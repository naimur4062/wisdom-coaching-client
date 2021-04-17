import React from 'react';
import teacher1 from '../../../images/teacher-1.jpg';
import teacher2 from '../../../images/teacher-2.jpg';
import teacher3 from '../../../images/teacher-3jpg.jpg';
import Teacher from '../Teacher/Teacher';
import './Teachers.css';

const teacherData = [
    {
        author: 'Kelvans',
        title: 'Teacher',
        authorImg: teacher1,
        description: 'University of Dhaka'
    },
    {
        author: 'Nlisask',
        title: 'Teacher',
        authorImg: teacher2,
        description: 'University of Rajshahi'
    },
    {
        author: 'Lmisasd',
        title: 'Teacher',
        authorImg: teacher3,
        description: 'University of Khulna'
    },
]


const Teachers = () => {
    return (
        <section className="teachers my-5">
        <div className="container">
            <div className="section-header text-center">
                <h5 style={{color: '#ff4880'}} className="text-uppercase">Teacher</h5>
                <h1 style={{color: '#2b3c6b'}}>World Best Teacher <br/> Will Teach</h1>
            </div>
            <div className="card-deck mt-5 row">
                {
                    teacherData.map(teacher => <Teacher teacher={teacher} key={teacher.author}/>)
                }
           </div>
        </div>
    </section>
    );
};

export default Teachers;