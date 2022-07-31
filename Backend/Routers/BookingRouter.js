const express=require("express");
const { getBookingData, createBooking, deleteData } = require("../Handlers/BookingHandler");

const BookingRouter=express.Router();

BookingRouter.get("/bookings/:user_email",getBookingData);
BookingRouter.post("/bookings",createBooking);
BookingRouter.delete("/bookings/:id",deleteData);

module.exports=BookingRouter;