import React from 'react';
import {Outlet} from "react-router-dom";
import {Row, Col} from "react-bootstrap";

function EditProduct(props) {
    return (
        <Row className={"justify-content-center"}>
            <Col className={"justify-content-center"} sm={9}>
                <Outlet/>
                <h2>This will hold the form to edit a product</h2>
            </Col>
        </Row>
    );
}

export default EditProduct;