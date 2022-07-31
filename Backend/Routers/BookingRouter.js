const express=require("express");
const { getBookingData, createBooking } = require("../Handlers/BookingHandler");

const BookingRouter=express.Router();

BookingRouter.get("/bookings/:user_email",getBookingData);
BookingRouter.post("/bookings",createBooking);

module.exports=BookingRouter;