const users = require('../models/usersModel')

//Showing All Book

const index = (req , res , next) => {
    users.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "Error !"
        })
    })
}

//Show Specific Book

const show = (req , res , next) => {
    let userID = req.body.userID;
    users.findById(userID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:"Error"
        })
    })
}

//Store Book

 const store = (req , res , next) => {
    let newuser = new users({
        email: req.body.email,
        password: req.body.password
    });
    newuser.save()
    .then(response => {
        res.json({
            message:"User Added Sucessfully"
        })
    })
    .catch(error => {
        res.json({
            message: "Error !"
        })
    })
}

//Update Book By Id

const update = (req , res , next) => {
    let userID = req.body.userID;

    let updatedData = {
        email: req.body.email,
        password: req.body.password
    }

    users.findByIdAndUpdate(userID, {$set : updatedData})
    .then(response => {
        res.json({
            message:"Data Updated !"
        })
    })
    .catch(error =>{
        res.json({
            message:"Error !"
        })
    })
}


//Update Book By Id

const isExist = (req , res , next) => {
    let userID = req.body.userID;

    let updatedData = {
        email: req.body.email,
        password: req.body.password
    }

    users.find({email:"akash@gmail.com",password:"anthony"})
    .then(response => {
        if(response != null){
            res.json({
                data:true,
                status:true
            })
        }else{
            res.json({
                data:false,
                status:false
            })
        }
    })
    .catch(error =>{
        res.json({
            message:"Error !"
        })
    })
}


//Delete Book By Id

const destroy = (req , res , next) => {
    let userID = req.body.userID;

    users.findByIdAndDelete(userID)
    .then(() => {
        res.json({
            message: "User Deleted !"
        })
    })
    .catch(error => {
        req.json({
            message: "Error !"
        })
    })
}


const checkUser = 

module.exports = {
    index,show,store,update,destroy,isExist
}