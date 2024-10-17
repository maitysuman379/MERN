const mongoose = require("mongoose");

async function ConnectDB() {
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connection is successfull...");
  }catch(err){
    console.log(err);
  }
}
module.exports = ConnectDB;