import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router";

function SeaLayout(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div style={{ margin: "1rem" }}>

                <Outlet />
            </div>
        </div>
    )
}

export default SeaLayout;