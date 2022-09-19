import React, { useState } from 'react'
import {Form, Button} from "react-bootstrap";

const MunicipalRegister = () => {
    
    return (
        <>
            <Form>
                <Form.Group className="mb-3 mt-4 mx-4 my-2" controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control className="w-25" size="sm" type="text"
                        name="username" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3 mt-4 mx-4" controlId="formBasicEmail">
                    <Form.Label>State</Form.Label>
                    <Form.Control className="w-25" size="sm" type="text"
                        name="state" placeholder="Enter State" />
                </Form.Group>

                <Form.Group className="mb-3 mt-4 mx-4" controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Control className="w-25" size="sm" type="text"
                        name="city" placeholder="Enter City" />
                </Form.Group>

                <Form.Group className="mb-3 mt-4 mx-4" controlId="formBasicEmail">
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control className="w-25" size="sm" type="text" 
                        name="pincode" placeholder="Enter Pincode" />
                </Form.Group>

                <Form.Group className="mb-3 mt-4 mx-4" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control className="w-25" size="sm" type="tel"
                        name="phone" placeholder="Enter Phone number" />
                </Form.Group>

                <Form.Group className="mb-3 mt-4 mx-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="w-25" size="sm" type="email"
                        name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 mt-4 mx-4" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="w-25" size="sm" type="password"
                        name="password" placeholder="Enter Password" />
                </Form.Group>

                
               
                <Button className="mb-3 mt-4 mx-4" variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default MunicipalRegister;