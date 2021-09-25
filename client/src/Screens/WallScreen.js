import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {LinkContainer} from 'react-router-bootstrap'
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
                <LinkContainer to={`/images/${post._id}`}><div>
                    <h2>{post.name}</h2>
                    <h2>{post.description}</h2>
                    <h2>{post.date}</h2>
                    <h2>{post.upVotes}</h2>
                    </div></LinkContainer>)
                
            })): <h3>Loading</h3>}               
        </div>
    )
}

export default WallScreen
