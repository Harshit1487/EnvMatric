import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

import {Table, Button} from "react-bootstrap";

const UserDetails = () => {

    return (
        <>
            
             <Table striped bordered hover size="sm" className='mt-4'>
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Desc</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Upvotes</th>
                        <th>Is Clean</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Harshit Raj</td>
                        <td>display</td>
                        <td>waste area</td>
                        <td>17/09/2022</td>
                        <td>Muradnagar</td>
                        <td>10</td>
                        <td>true</td>
                    </tr>
                    
                </tbody>
            </Table>
        </>
    );
};

export default UserDetails;