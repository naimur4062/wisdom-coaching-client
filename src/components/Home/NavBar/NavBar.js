import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav, Navbar } from 'react-bootstrap';
import educationIcon from '../../../images/educationalicon.png';
import { useContext } from 'react';
import { AdminContext } from '../../../App';



const NavBar = () => {
    const [admin, setAdmin] = useContext(AdminContext);

    return (
        <div className="container mt-5 d-flex justify-content-between header">
            <div className="d-flex">
                <div className="mt-2 mr-2">
                    <img style={{ width: '80px' }} src={educationIcon} alt="" />
                </div>
                <div className="nav-header">
                    <h1 style={{ letterSpacing: '10px', color: '#ff4880' }}>WISDOM</h1>
                    <h3 style={{ color: '#3a4256' }}>Coaching Center</h3>
                </div>
            </div>
            <div>
                <Navbar collapseOnSelect expand="lg">
                    <div className="container">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Link className="nav-link" to="/home">
                                    Home
                                </Link>
                               <Link className="nav-link" to="/dashboard">
                                    Dashboard
                                </Link>
                                <Link className="nav-link " to="/review">
                                    Review
                                </Link>
                                <Link className="nav-link " to="">
                                    Contact Us
                                </Link>
                                <div>
                                    <Link to="/login"><Button style={{ backgroundColor: '#ff4880', padding: '10px', color: 'white', width: '100px', fontWeight: '500' }}>Login</Button></Link>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;