require('dotenv').config({path:"../.env"})
const path=require("path");
const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");


const HotelRouter=require("./Routers/HotelRouter");
const UserRouter = require("./Routers/User");
const BookingRouter=require("./Routers/BookingRouter");
//const GoogleRouter = require("./Routers/GoogleAuth");
const session = require('express-session');


const CheckoutRouter = require("./Routers/CheckoutRouter");
const getCityRouter = require("./Routers/getcity");


const app=express();
app.use(express.static(path.join(__dirname+"/public")))
const PORT = process.env.PORT||3001;
app.use(cors());
app.use(express.json());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

app.use((req,res,next) =>{
    console.log('request receive')
    console.log(req.body)
    next()
}) 

app.use(getCityRouter);
app.use(HotelRouter);
app.use(UserRouter);
app.use(BookingRouter);

// app.use(GoogleRouter);

app.use(CheckoutRouter);

async function connectDatabase()
{
    const dbURI=process.env.MONGODB_URI;
    console.log(dbURI)
    try {
        await mongoose.connect(dbURI);
        console.log("Database connected ")
    } catch (error) {
        console.log("Something went wrong with database " ,dbURI)
    }
}

connectDatabase()
.then(()=>{
    app.listen(PORT,()=>
    {
        console.log(`Server connected to port ${PORT}`);
    })
})

