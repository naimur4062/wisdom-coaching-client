import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faGripHorizontal, faUserPlus, faBorderAll, faPlus, faShoppingCart, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { AdminContext, UserContext } from '../../../App';
import educationIcon from '../../../images/educationalicon.png'

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useContext(AdminContext);
    const [isAdmin, setIsAdmin] = useState(false);
    console.log('admin', isAdmin)

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data);
                setAdmin(data);
            })
    }, [loggedInUser]);
    return (
        <div>
            <div className="d-flex mt-5">
                <div className="mt-2 mr-2">
                    <img style={{ width: '50px' }} src={educationIcon} alt="" />
                </div>
                <div className="nav-header">
                    <h4 style={{ letterSpacing: '5px', color: '#ff4880' }}>WISDOM</h4>
                    <h6 style={{ color: '#3a4256' }}>Coaching Center</h6>
                </div>
            </div>
            <div className="sidebar d-flex flex-column justify-content-between py-5 px-4">
                <ul className="list-unstyled">
                    {isAdmin && <div>
                        <li>
                            <Link to="/bookingList" style={{ color: "gray" }}>
                                <FontAwesomeIcon className="icon" icon={faBorderAll} /> <span>Booking List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addCourse" style={{ color: "gray" }}>
                                <FontAwesomeIcon className="icon" icon={faPlus} /> <span>Add Course</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" style={{ color: "gray" }}>
                                <FontAwesomeIcon className="icon" icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageServices" style={{ color: "gray" }}>
                                <FontAwesomeIcon className="icon" icon={faGripHorizontal} /> <span>Manage Services</span>
                            </Link>
                        </li>
                    </div>}
                    {!isAdmin && <div>
                        <li>
                            <Link to="/course/:id" style={{ color: "gray" }}>
                                <FontAwesomeIcon className="icon" icon={faShoppingCart} /> <span>Book</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/userBookingList" style={{ color: "gray" }}>
                                <FontAwesomeIcon className="icon" icon={faBorderAll} /> <span>Course List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/review" style={{ color: "gray" }}>
                                <FontAwesomeIcon className="icon" icon={faCommentAlt} /> <span>Review</span>
                            </Link>
                        </li>
                    </div>}
                </ul>
                <div>
                    <ul className="list-unstyled">
                        <li>
                            <Link to="/home" style={{ color: "gray" }}><FontAwesomeIcon className="icon" icon={faSignOutAlt} /> <span>Go to Home</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;