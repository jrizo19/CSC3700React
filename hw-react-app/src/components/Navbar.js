import React from 'react';
import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <Nav className="justify-content-end mainNav" activeKey="/">
            <Nav.Item>
                <Nav.Link  as={NavLink} to='/'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to='/customers'>Customers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to='/products'>Products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to='/sales'>Sales</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;