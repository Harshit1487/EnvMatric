import React, { useState } from 'react'
import {Form, Button} from "react-bootstrap";

const MunicipalLogin = () => {
    
    return (
        <>
            <Form className='mx-5'>
                <Form.Group className="mb-3 mt-5 mx-5" controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control className="w-25" size="sm" type="text"
                        name="username" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3 mt-4 mx-5" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="w-25" size="sm" type="password"
                        name="password" placeholder="Enter Password" />
                </Form.Group>

                
               
                <Button className="mb-3 mt-4 mx-5" variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default MunicipalLogin;