import React from 'react';
import {Button, Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function HomeCustomers({customers, title}) {
    let navigate = useNavigate();
    customers = customers.customer[0];
    if (!customers) {
        return <div>No customer data available.</div>;
    }
    if (!Array.isArray(customers)) {
        return <div>Customers not an array</div>
    }
    return (
        <div>
            <h3>{title}</h3>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Total Spent</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                        <tr key={customer.CustomerID}>
                            <td> {customer.CustomerName} </td>
                            <td> ${customer.Total_Sales} </td>
                        </tr>
                    )
                )}
                </tbody>
            </Table>
            <Button onClick={() => navigate(`/customers`)}> Show All </Button>
        </div>
    );
}

export default HomeCustomers;