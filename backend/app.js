const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const ConnectDB = require('./config/db');
const PORT = 8080 || process.env.PORT;
const router = require("./routes");


app.use(cors());
app.use(express.json())
app.use("/api",router);


app.get("/",(req,res)=>{
    res.status(200).json({ msg:"Hi i am root path", status:200, success:true });
})

ConnectDB().then(()=>{
    console.log("2 Step db Connection is successfull...");
    app.listen(PORT,()=>{
        console.log(`Server is listening on port No : ${PORT}...`);
    });
}).catch((err)=>{
    console.log("Error Is : ",err);
});