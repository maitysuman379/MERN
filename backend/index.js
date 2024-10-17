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


ConnectDB().then(()=>{
    console.log("2 Step Connection is successfull...");
    app.listen(PORT,()=>{
        console.log(`Server is listening on port :${PORT}`);
    });
}).catch((err)=>{
    console.log("Error Is : ",err);
});