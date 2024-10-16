const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const ConnectDB = require('./config/db');
const PORT = 8080 || process.env.PORT;


app.use(cors());

ConnectDB().then(()=>{
    console.log("Connection is successfull...");
}).catch((err)=>{
    console.log("Error Is : ",err);
});

app.listen(PORT,()=>{
    console.log(`Server is listening on port :${PORT}`);
});