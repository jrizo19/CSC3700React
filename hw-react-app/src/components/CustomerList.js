import React from 'react';
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

function CustomerList ({customers, title, handleDelete}) {
    if (!customers || !Array.isArray(customers)) {
        return <div>No customer data available.</div>;
    }
    return (
        <div>
            <h2> {title} </h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Total Sales</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                        <tr key={customer.CustomerID}>
                            <td> {customer.CustomerName}</td>
                            <td> {customer.CustomerEmail}</td>
                            <td> {customer.TotalSales}</td>
                            <td>
                                <Link to={`/customers/${customer.CustomerID}`}> Update ID:{customer.CustomerID}</Link>
                            </td>
                            <td>
                                <Link to={`/customers/${customer.CustomerID}`}> Delete ID:{customer.CustomerID}</Link>
                            </td>
                        </tr>
                    )
                )}
                </tbody>
            </Table>
        </div>
    );
}

export default CustomerList;