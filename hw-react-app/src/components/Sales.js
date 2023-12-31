import React from 'react';
import useFetch from "./useFetch";
import {Col, Row} from "react-bootstrap";
import SalesList from "./SalesList";

function Sales() {
    let url = " http://localhost:1000/sales";
    const {data: sales, isPending, error} = useFetch(url)
    const myTitle = "Current Month's Sales";
    return (
        <Row className="justify-content-center">
            <Col sm={9}>
                {error && <div> Error: {error} </div>}
                {isPending && <div> Loading ...</div>}
                {sales && <SalesList sales={sales} title={myTitle}/>}
            </Col>
        </Row>
    );
}

export default Sales;