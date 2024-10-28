const User = require('../models/userModel.js')
const bcrypt = require('bcryptjs')

async function userSignInController(req,res){
    try{
        const { email, password } = req.body

        if(!email){
            throw new Error("Please provide an email");
        }
        if(!password){
            throw new Error("Please provide a password");
        }

        const user = await User.findOne({email})

        if(!user){
            throw new Error("User Not Found :( ")
        }

        const checkPassword = await bcrypt.compare(password,user.password)

        console.log(checkPassword)

        if(checkPassword){

        }else{
            throw new Error('please check password')
        }

    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false,
        })
    }
}

module.exports = userSignInController