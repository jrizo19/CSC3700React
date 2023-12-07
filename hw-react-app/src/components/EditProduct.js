import React, {useState} from 'react';
import {Outlet, useNavigate, useParams} from "react-router-dom";
import {Row, Col, Form, Button} from "react-bootstrap";

function EditProduct() {
    const {id} = useParams();
    let navigate = useNavigate()
    let url = `http://localhost:1000/products/${id}`;
    const [ItemName, setItemName] = useState("");
    const [ItemPrice, setItemPrice] = useState("");

    async function handleSubmit() {
        if (ItemName === "" || ItemPrice === "") {
            alert("No empty fields allowed");
        } else {
            const data = {
                'ItemName': ItemName,
                'ItemPrice': ItemPrice,
                'ItemID': id,
            }
            let formBody = [];
            for (let property in data) {
                let encodedKey = encodeURIComponent(property);
                let encodedValue = encodeURIComponent(data[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            const requestOptions = {
                method: 'PUT',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: formBody
            };
            fetch(url, requestOptions)
                .then(async response => {
                    const isJson = response.headers.get('content-type')?.includes('application/json');
                    const data = isJson && await response.json();
                    // check for error response
                    if (!response.ok) {
                        // get error message from body or default to response status
                        const error = (data && data.message) || response.status;
                        return Promise.reject(error);
                    }
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
            setTimeout(() => {
                navigate(`/products`);
            }, 500);
        }
    }

    return (
        <Row className={"justify-content-center"}>
            <Col className={"justify-content-center"} sm={9}>
                <Outlet/>
                <h2> Edit Product </h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="e.g. Screwdriver"
                                      value={ItemName}
                                      required
                                      onChange={(e) => setItemName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAuthor">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="e.g. 9.99"
                                      value={ItemPrice}
                                      required
                                      onChange={(e) => setItemPrice(e.target.value)}
                        />
                    </Form.Group>
                </Form>
                <Button onClick={handleSubmit}>Submit</Button>
            </Col>
        </Row>
    );
}

export default EditProduct;