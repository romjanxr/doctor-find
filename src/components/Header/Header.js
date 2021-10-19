import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="header" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"><img width="150px" src={logo} alt="docfind" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end link">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        {
                            user?.email ? <div>
                                <span className="text-light">Welcome: {user.displayName}</span>
                                <Button className="btn btn-light ms-3" size="sm" onClick={logOut}>Log Out</Button>
                            </div>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;