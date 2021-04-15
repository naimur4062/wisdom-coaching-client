import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav, Navbar } from 'react-bootstrap';
import educationIcon from '../../../images/educationalicon.png';



const NavBar = () => {
    return (
        <div className="container mt-5 d-flex justify-content-between header">
            <div className="d-flex">
                <div className="mt-2 mr-2">
                    <img style={{ width: '80px' }} src={educationIcon} alt="" />
                </div>
                <div className="nav-header">
                    <h1 style={{ letterSpacing: '10px' }}>WISDOM</h1>
                    <h3>Coaching Center</h3>
                </div>
            </div>
            <div className="">
                <Navbar collapseOnSelect expand="lg">
                    <div className="container">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Link className="nav-link" to="/home">
                                    Home
                                </Link>
                                <Link className="nav-link" to="/donation">
                                    Donation
                                </Link>
                                <Link className="nav-link " to="/events">
                                    Events
                                </Link>
                                <Link className="nav-link " to="/blogs">
                                    Blogs
                                </Link>
                                <div>
                                    <Link to=""><Button style={{ backgroundColor: '#ff4880', padding: '10px', color: 'white', width: '100px', fontWeight: '500' }}>Admin</Button></Link>
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