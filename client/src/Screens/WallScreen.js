import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {LinkContainer} from 'react-router-bootstrap'
import {Card,Button} from 'react-bootstrap'
const WallScreen = () => {
    useEffect( () =>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get('/api/walldata')
                setData(res.data);
            }
            catch (err) {
                const msg = err.response ? err.response.data.message : err
                console.log(msg)
              }
        }
        fetchData()
    })
    const [data,setData]=useState([]);
    return (
        <div>
            <h2>Wall</h2>
            {data!==null? (data.map((post) => {
                return (
                
                    <Card className="w-50 d-block mx-auto">
                    <Card.Body>
                    <Card.Title>{post.name}</Card.Title>
                    <Card.Text>
                    {post.description}
                    </Card.Text>
                    <Card.Text>{post.date}</Card.Text>
                    <LinkContainer to={`/images/${post._id}`}><Button variant="primary">See Image</Button></LinkContainer>
                    <Card.Text>{post.upVotes}</Card.Text>
                    </Card.Body>
                    </Card>
                    )
                
            })): <h3>Loading</h3>}               
        </div>
    )
}

export default WallScreen
