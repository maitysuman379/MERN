const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');


async function userSignUpController(req,res){
    try{
        const { name, email, password } = req.body;

        const user = await User.findOne({email})
        if(user){
            throw new Error("Already user Exist")
        }

        console.log(req.body);

        if(!email){
            throw new Error("Please provide an email");
        }
        if(!password){
            throw new Error("Please provide a password");
        }
        if(!name){
            throw new Error("please provide a name");
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error("Somthing is Wrong");
        }

        const payload = {
            ...req.body,
            password : hashPassword
        }

        const userData = new User(payload);
        const saveUser = userData.save()

        res.status(201).json({
            data : saveUser,
            success :true,
            error : false,
            message : "User Created Successfully...",
        });
        
    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false,
        })
    }
}

module.exports = userSignUpController;