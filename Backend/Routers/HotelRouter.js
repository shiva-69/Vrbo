const express=require("express");
const {Router}=require("express");
const {searchHotel, searchHotelById} = require("../Handlers/HotelHandler");

const HotelRouter=express.Router();

HotelRouter.get("/hotel/:city",searchHotel);
HotelRouter.get("/hotel/id/:id", searchHotelById);

module.exports=HotelRouter;