const mongoose=require("mongoose");
require('dotenv').config({path:"../../Backend/.env"})

async function connectDatabase()
{
    const dbURI=process.env.MONGODB_URI;
    try {
        await mongoose.connect(dbURI);
        console.log("Database connected ")
    } catch (error) {
        console.log("Something went wrong with database")
    }
}

module.exports=connectDatabase;