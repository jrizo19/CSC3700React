import React from 'react';
import {Button, Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function HomeSales({sales, title}) {
    let navigate = useNavigate();
    if (!sales || !Array.isArray(sales)) {
        return <div>No sales data available.</div>;
    }
    return (
        <div>
            <h3>{title}</h3>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Month</th>
                    <th>Year</th>
                    <th>Total Sales</th>
                </tr>
                </thead>
                <tbody>
                {sales.map((sale) => (
                        <tr key={sale.salesid}>
                            <td> {sale.Month} </td>
                            <td> {sale.Year} </td>
                            <td> ${sale.Total_Sales} </td>
                        </tr>
                    )
                )}
                </tbody>
            </Table>
            <Button onClick={() => navigate(`/sales`)}> Show All </Button>
        </div>
    );
}

export default HomeSales;