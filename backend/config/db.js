const mongoose = require("mongoose");

async function ConnectDB() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("db Connection is successfull...");
}
module.exports = ConnectDB;