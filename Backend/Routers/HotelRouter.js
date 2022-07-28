const express=require("express");
const {Router}=require("express");
const searchHotel = require("../Handlers/HotelHandler");

const HotelRouter=express.Router();

HotelRouter.get("/hotel/:city",searchHotel);

module.exports=HotelRouter;