const User = require('../models/userModel.js')
const jwt = require('jsonwebtoken')
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
            const tokenData = {
                _id : user._id,
                email : user.email
            }

            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8});

            const tokenOption = {
                httpOnly : true,
                secure : true
            }

            res.cookie("token",token,tokenOption).json({
                message : "login Successfully",
                data : token,
                success : true,
                error : false
            })

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