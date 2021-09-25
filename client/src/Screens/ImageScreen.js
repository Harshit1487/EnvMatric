import React,{useEffect,useState} from 'react'
import "./CSS/Wallscreens.css";
import { useParams } from 'react-router-dom'
import axios from 'axios'
const ImageScreen = () => {
    const { id } = useParams()
    const [image,setImage]=useState("");
    useEffect(() => {
        const fetchImage = async () =>{
            const res = await axios.get(`/api/images/${id}`, {responseType: "arraybuffer"});
            const img = await Buffer.from(res.data, 'binary').toString('base64')
            console.log(res.data)
            setImage(img)
        }
        fetchImage()
    }, [])
    return (
        <div className="container my-1 imagedisp py-2">
            <h2 className="my-5">Hello {id}</h2>
            {image!==undefined? (<img src={`data:image/jpeg;base64,`+image} className="my-3"/>): <p>Loading..</p>}
        </div>
    )
}

export default ImageScreen
