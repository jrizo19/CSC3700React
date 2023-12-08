import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useFetch from "./useFetch"
import {Row, Col, Table} from "react-bootstrap";
import {Button} from "react-bootstrap";

function CustomerDetails() {
    let navigate = useNavigate();
    const {id} = useParams();
    let url = `http://localhost:1000/customers/${id}`;
    const {data: customer, isPending, error} = useFetch(url)
    return (
        <Row className={"justify-content-center"}>
            <Col className={"justify-content-center"} sm={12}>
                {isPending && <div> Loading </div>}
                {error && <div> {error} </div>}
                {customer && (
                    <div>
                        <h2> Current Customer Details </h2>

                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th> Customer ID</th>
                                <th> Name</th>
                                <th> Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr key={customer.CustomerID}>
                                <td> {customer.CustomerID} </td>
                                <td> {customer.CustomerName} </td>
                                <td> {customer.CustomerEmail} </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Button onClick={() => navigate(`/customers`)}> Back to All Customers </Button>
                    </div>
                )}
            </Col>
        </Row>
    );
}

export default CustomerDetails;