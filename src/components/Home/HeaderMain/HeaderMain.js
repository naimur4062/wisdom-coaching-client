import React from 'react';
import varsity from '../../../images/varsity.png';

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <h1 style={{ color: '#3a4256' }}>Chase Your Dreams <br /> With Wisdom</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed amet fugiat voluptate quisquam deserunt culpa magni eaque est cumque!</p>
            <button className="send-btn">CONTACT US</button>
        </div>
        <div className="col-md-6">
            <img src={varsity} className="img-fluid" alt="" />
        </div>
    </main>
    );
};

export default HeaderMain;