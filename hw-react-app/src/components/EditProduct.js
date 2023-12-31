import React, {useState} from 'react';
import {Outlet, useNavigate, useParams} from "react-router-dom";
import {Row, Col, Form, Button, Alert} from "react-bootstrap";

function EditProduct() {
    const {id} = useParams();
    let navigate = useNavigate()
    let url = `http://localhost:1000/products/${id}`;
    const [ItemName, setItemName] = useState("");
    const [ItemPrice, setItemPrice] = useState("");
    const [showAlertName, setShowAlertName] = useState(false);
    const [showAlertPrice, setShowAlertPrice] = useState(false);
    const [showAlertBoth, setShowAlertBoth] = useState(false);

    async function handleSubmit() {
        if (ItemName === "" && ItemPrice === "") {
            setShowAlertBoth(true);
        } else if (ItemName === "") {
            setShowAlertName(true);
        } else if (ItemPrice === "") {
            setShowAlertPrice(true);
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
                <h2 style={{ paddingTop: '50px' }}> Edit Product </h2>
                {showAlertName && (
                    <Alert variant="warning" onClose={() => setShowAlertName(false)} dismissible>
                        You must enter a product name.
                    </Alert>
                )}
                {showAlertPrice && (
                    <Alert variant="warning" onClose={() => setShowAlertPrice(false)} dismissible>
                        You must enter a product price.
                    </Alert>
                )}
                {showAlertBoth && (
                    <Alert variant="warning" onClose={() => setShowAlertBoth(false)} dismissible>
                        You must enter a product name and price.
                    </Alert>
                )}
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