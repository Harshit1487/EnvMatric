let User = require('../models/User.js');
const path = require('path')

exports.uploadImage = (req,res) =>{
    const name = req.body.name;
    const description = req.body.description;
    const date=req.body.date;
    const photo = req.file.filename;
    const location=req.body.location
    const newUserData = {
        name,photo,description,date,location
    }

    const newUser = new User(newUserData);

    newUser.save()
           .then(() => res.json('User Added'))
           .catch(err => res.status(400).json('Error: ' + err));
}
exports.getImages = (req,res) =>{
    const id = req.params.id
    User.find({_id: id}, function(err, docs) {
        if (!err) { 
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
exports.clean = async(req,res) =>{
    try{
        const id = req.params.id
        let upd = await User.findOneAndUpdate({_id: id}, {isClean: true});
        res.status(200).send("Updated")
    } catch(err){
        res.status(404).send("Not Found")
    }
}