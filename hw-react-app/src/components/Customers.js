import React from 'react';
import useFetch from "./useFetch";
import {Button, Col, Row} from "react-bootstrap";
import CustomerList from "./CustomerList";
import {useNavigate} from "react-router-dom";

function Customers() {
    let navigate = useNavigate();
    let url = "http://localhost:1000/customers";
    const {data: customers, isPending, error, fetchData} = useFetch(url);
    const myTitle = "Customers Management";
    return (
        <div>
            <Row className={"justify-content-center"}>
                <Col sm={9}>
                    {error && <div> Error: {error} </div>}
                    {isPending && <div> Loading ...</div>}
                    {customers && <CustomerList fetchData={fetchData} customers={customers} title={myTitle}/>}
                    <Button style={{ marginBottom: '15px' }} onClick={() => navigate(`/customers/add`)}> Insert New Customer </Button>
                </Col>
            </Row>
        </div>
    );
}

export default Customers;