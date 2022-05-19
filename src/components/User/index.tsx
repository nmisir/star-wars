import React from 'react';
import { TUserProp } from '../../helpers/types/TUserProp';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const User = (props: TUserProp): JSX.Element => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">
                    {props.specieName && (
                        <img
                            alt=""
                            src={require('../../assets/images' + props.specieName.toLowerCase() + '.jpeg')}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    )}
                    {props.userName}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Link to={'/'} className="nav-link">
                            Logout
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default User;
