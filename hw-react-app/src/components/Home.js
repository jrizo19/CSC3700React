import React from 'react';
import useFetch from "./useFetch";
import {Col, Row} from "react-bootstrap";
import HomeCustomers from "./HomeCustomers";
import HomeProducts from "./HomeProducts";
import HomeSales from "./HomeSales";

function Home() {
    let url = " http://localhost:1000/home";
    const {data : home, isPending, error} = useFetch(url);
    const customersTitle = "Top Customers";
    const productsTitle = "Top Products";
    const salesTitle = "Sales";
    return (
        <Row>
            <Col className={"justify-content-center"} sm={10}>
                {error && <div> Error: {error} </div>}
                {isPending && <div> Loading ...</div>}
                {home && <HomeCustomers customers={home[0]} title={customersTitle}/>}
                {home && <HomeProducts products={home[1]} title={productsTitle}/>}
                {home && <HomeSales sales={home[2]} title={salesTitle}/>}
            </Col>
        </Row>
    );
}

export default Home;