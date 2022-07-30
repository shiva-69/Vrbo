const mongoose=require("mongoose");

async function connectDatabase()
{
    const dbURI="mongodb://127.0.0.1:27017/city";
    try {
        await mongoose.connect(dbURI);
        console.log("Database connected ")
    } catch (error) {
        console.log("Something went wrong with database")
    }
}

module.exports=connectDatabase;