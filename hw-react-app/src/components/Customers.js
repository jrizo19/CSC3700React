import React from 'react';
import useFetch from "./useFetch";
import {Button, Col, Row} from "react-bootstrap";
import CustomerList from "./CustomerList";
import {Outlet, useNavigate} from "react-router-dom";

function Customers() {
    let navigate = useNavigate();
    let url = " http://localhost:1000/customers";
    const {data: customers, isPending, error} = useFetch(url);
    const myTitle = "Customers Management";
    console.log(customers);
    return (
        <div>
            <Row className={"justify-content-center"}>
                <Col sm={9}>
                    {error && <div> Error: {error} </div>}
                    {isPending && <div> Loading ...</div>}
                    {customers && <CustomerList customers={customers} title={myTitle}/>}
                    <Button onClick={() => navigate(`/customers/add`)}> Insert New Customer </Button>
                </Col>
            </Row>
        </div>
    );
}

export default Customers;