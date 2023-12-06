import React from 'react';
import useFetch from "./useFetch";
import {Col, Row} from "react-bootstrap";
import CustomerList from "./CustomerList";

function Customers() {
    let url = " http://localhost:1000/customers";
    const {data : customers, isPending, error} = useFetch(url);
    const myTitle = "Customers Management";
    console.log(customers);
    return (
        <Row>
            <Col className={"justify-content-center"} sm={10}>
                {error && <div> Error: {error} </div>}
                {isPending && <div> Loading ...</div>}
                {customers && <CustomerList customers={customers} title={myTitle}/>}
            </Col>
        </Row>
    );
}

export default Customers;