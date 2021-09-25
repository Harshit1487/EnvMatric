import React, { useState } from 'react';
import axios from 'axios';

const UploadScreen = () => {
    const [newUser, setNewUser] = useState(
        {
            name: '',
            photo: '',
            description: '',
            date: ''
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('date', newUser.date);
        formData.append('name', newUser.name);
        formData.append('description', newUser.description);

        axios.post('/api/upload/', formData)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewUser({...newUser, photo: e.target.files[0]});
    }

    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto}
            />

            <input 
                type="text"
                placeholder="name"
                name="name"
                value={newUser.name}
                onChange={handleChange}
            />

            <input 
                type="date"
                name="date"
                value={newUser.date}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="description"
                value={newUser.description}
                placeholder="Enter Description"
                onChange={handleChange}
            />

            <input 
                type="submit"
            />
        </form>
    );
}

export default UploadScreen;