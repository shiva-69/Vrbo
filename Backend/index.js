const express=require("express");
const cors=require("cors");
const connectDatabase=require("./Database/index");
const HotelRouter=require("./Routers/HotelRouter");
const UserRouter = require("./Routers/User");
const CheckoutRouter = require("./Routers/CheckoutRouter");

const app=express();
app.use(express.json());
app.use(cors());
app.use(HotelRouter);
app.use(UserRouter);
app.use(CheckoutRouter);
connectDatabase()
.then(()=>{
    app.listen(3001,()=>
    {
        console.log("Server has been connected to port 3001")
    })
})

