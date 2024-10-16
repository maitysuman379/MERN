const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = 8080 || process.env.PORT;  


app.use(cors());


app.listen(PORT,()=>{
    console.log(`Server is listening on port :${PORT}`);
});