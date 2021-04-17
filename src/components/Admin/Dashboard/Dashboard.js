import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';
import coaching from '../../../images/coaching.jpg';

const Dashboard = () => {
    return (
        <div className="container-fluid row" >
            <div className="col-md-3 d-flex justify-content-center">
                <Sidebar/>
            </div>
            <div className="col-md-9 d-flex justify-content-center p-4 pr-5">
              <div className="coaching-title">
                  <p>Welcome to Wisdom Coaching Center</p>
                  <div className="coaching-img">
                      <img src={coaching} alt="" className="fluid"/>
                  </div>
              </div>
            </div>
        </div>
    );
};

export default Dashboard;