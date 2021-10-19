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
                    <Navbar.Brand as={Link} to="/"><img width="150px" src={logo} alt="docfind" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end link">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        {
                            user?.email ? <>
                                <span className="text-light">Sign In as: {user.displayName}</span>
                                <Button className="btn btn-light ms-3" size="sm" onClick={logOut}>Log Out</Button>
                            </>
                                :
                                <>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    <Button className="btn-signup" variant="danger" as={Link} to="/register">Sign Up</Button>
                                </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;