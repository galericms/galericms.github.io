import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { LinkContainer } from "react-router-bootstrap";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Header = props => {
    // eslint-disable-next-line
    const [userName, setUserName] = useState("Profile");
    // eslint-disable-next-line
    const [userID, setUserID] = useState(-1);

    // TODO: check cookie for who's logged in, replace "Profile" with the
    //   username, userID with the ID, and hide the SignUp/Login buttons
    // Also, hide the Profile link when not logged in.

    // eslint-disable-next-line
    const profileURL = `/profile/${userID}`;

    return (
        <Navbar
            collapseOnSelect
            expand="md"
            bg="primary"
            variant="dark"
            sticky="top"
        >
            <LinkContainer to="/">
                <Navbar.Brand>
                    <img
                        src={require("../../assets/GaleriLogo.png")}
                        height="45px"
                        alt="Logo"
                    />
                    <span className="ml-2">{props.title}</span>
                </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" activeKey={props.location.pathname}>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search Tags"
                            className="mr-sm-2"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    <LinkContainer to="/project/create">
                        <Nav.Link>Create a new Project</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                        <Nav.Link>Register</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default withRouter(Header);
