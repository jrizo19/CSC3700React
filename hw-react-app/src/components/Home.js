import React from 'react';
import useFetch from "./useFetch";
import {Col, Row} from "react-bootstrap";
import HomeCustomers from "./HomeCustomers";
import HomeProducts from "./HomeProducts";
import HomeSales from "./HomeSales";

function Home() {
    let url = "http://localhost:1000/home";
    const {data: home, isPending, error} = useFetch(url);
    const customersTitle = "Top Customers";
    const productsTitle = "Top Products";
    const salesTitle = "Sales";
    return (
        <Row style={{ padding: '20px' }} className={"justify-content-center"}>
            <Col className={"justify-content-center"} sm={4}>
                {error && <div> Error: {error} </div>}
                {isPending && <div> Loading ...</div>}
                {home && <HomeCustomers customers={home.customers} title={customersTitle}/>}
            </Col>
            <Col className={"justify-content-center"} sm={4}>
                {error && <div> Error: {error} </div>}
                {isPending && <div> Loading ...</div>}
                {home && <HomeProducts products={home.products} title={productsTitle}/>}
            </Col>
            <Col className={"justify-content-center"} sm={4}>
                {error && <div> Error: {error} </div>}
                {isPending && <div> Loading ...</div>}
                {home && <HomeSales sales={home.sales} title={salesTitle}/>}
            </Col>
        </Row>
    );
}

export default Home;