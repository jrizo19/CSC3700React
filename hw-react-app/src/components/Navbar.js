import React from 'react';
import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from '../harry.jpeg';

function Navbar() {
    return (
        <div>
        <Nav className="justify-content-start mainNav" activeKey="/">
            <img  id={"harryLogo"} src={logo} alt={"Harry Logo"}/>
            <Nav.Item>
                <Nav.Link as={NavLink} to='/'><span className="navItem">Home</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to='/customers'><span className="navItem">Customers</span></Nav.Link>
            </Nav.Item>
            <Nav.Item className="navItem">
                <Nav.Link as={NavLink} to='/products'><span className="navItem">Products</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to='/sales'><span className="navItem">Sales</span></Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
    );
}

export default Navbar;