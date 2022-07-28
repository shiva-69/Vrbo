const express=require("express");
const { createCheckout, getData } = require("../Handlers/CheckoutHandler");


const CheckoutRouter=express.Router();

CheckoutRouter.get("/checkout",getData);
CheckoutRouter.post("/checkout",createCheckout);

module.exports=CheckoutRouter;