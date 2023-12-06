import React from 'react';
import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from '../harry.jpeg';

function Navbar() {
    return (
        <div>
        <Nav className="mainNav" activeKey="/">
            <div>
                <img  id={"harryLogo"} src={logo} alt={"Harry Logo"}/>
            </div>
            <div id={"allNavs"}>
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
            </div>
        </Nav>
        </div>
    );
}

export default Navbar;