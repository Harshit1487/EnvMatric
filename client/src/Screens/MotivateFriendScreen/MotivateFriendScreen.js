import React,{useState} from 'react'
import {Alert,Button} from 'react-bootstrap'
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";

const MotivateFriendScreen = () => {
    const [message,setMessage]=useState("");
    const [phone,setPhone]= useState("");
    const [msgSent,setMsgSend]=useState(false);
    const {isAuthenticated, loginWithRedirect} = useAuth0();

    const sendmsg = async () =>{
        setMsgSend(true)
        console.log(phone)
        const res = await axios.post('/api/sendmsg', {message,phone})
    }
    const msg1 = () =>{
        setMsgSend(false)

        setMessage("Our planets alarm is going off, and it is time to wake up and take action!")
    }
    const msg2 = () =>{
        setMsgSend(false)

        setMessage("Earth provides enough to satisfy every man’s needs, but not every man’s greed.")
    }
    const msg3 = () =>{
        setMsgSend(false)

        setMessage("The only way forward, if we are going to improve the quality of the environment, is to get everybody involved")
    }
    const msg4 = () =>{
        setMsgSend(false)
        setMessage("What is the use of a house if you haven’t got a tolerable planet to put it on?")
    }
    return (
        <>
        {isAuthenticated? 
        <div>
        <div>
            <h2 className="text-center mt-5">Motivate your Friend</h2>
            <h3 className="text-center my-4">Alone, we can do so little; together, we can do so much</h3>
        </div>
        <div className="my-5">
            <h4 className="text-center"> Click on the quote to send it to your friend</h4>
        <Alert variant="primary">
                <p className="links text-center" onClick={msg1}>Our planet’s alarm is going off, and it is time to wake up and take action!</p>
        </Alert>
        <Alert variant="secondary">
                <p className="links text-center" onClick={msg2}>Earth provides enough to satisfy every man’s needs, but not every man’s greed.</p>
        </Alert>
        <Alert variant="success">
                <p className="links text-center" onClick={msg3}>The only way forward, if we are going to improve the quality of the environment, is to get everybody involved</p>
        </Alert>
        <Alert variant="danger">
                <p className="links text-center" onClick={msg4}>What is the use of a house if you haven’t got a tolerable planet to put it on? </p>
        </Alert>
        </div>
        {message.length>0?
        (<div>
            <h4 className="text-center">Selected Message: {message}</h4>
            <p className="text-center">Enter Phone Number with STD Code to send Message</p>
            {msgSent? <h3 className="text-center">Message Sent Successfuly</h3>: <div>
            <input className="d-block mx-auto mb-3" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <Button variant="primary" className="mb-5 d-block mx-auto" onClick={sendmsg}>Send Message</Button></div>}
        </div>): null
        }
        </div>: loginWithRedirect()}
        
        </>
    )
}

export default MotivateFriendScreen
