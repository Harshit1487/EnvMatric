let User = require('../models/User.js');
const path = require('path')

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
exports.getImages = (req,res) =>{
    const id = req.params.id
    User.find({_id: id}, function(err, docs) {
        if (!err) { 
            console.log(docs[0].photo);
            res.sendFile(path.resolve('images',`${docs[0].photo}`))
        }
        else {
            res.status(404).send("Image Not Found");
        }
    });
}
exports.wallData = async (req,res) =>{
    try{
        const userData = await User.find({})
        res.send(userData)
    } catch (err){
        res.status(404).send("No Wall Data Found")
    }
    
}