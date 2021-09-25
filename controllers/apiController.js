let User = require('../models/User.js');


exports.uploadImage = (req,res) =>{
    const name = req.body.name;
    const description = req.body.description;
    const date=req.body.date;
    const photo = req.file.filename;

    const newUserData = {
        name,photo,description,date
    }

    const newUser = new User(newUserData);

    newUser.save()
           .then(() => res.json('User Added'))
           .catch(err => res.status(400).json('Error: ' + err));
    console.log("hello");
}