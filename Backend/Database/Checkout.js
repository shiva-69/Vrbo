const mongoose=require("mongoose");

const checkoutSchema=new mongoose.Schema({
    user_email:String,
    hotel_id:mongoose.Types.ObjectId,
    check_in_date:Date,
    check_out_date:Date,
    Number_of_guests:Number
})

const Checkout=mongoose.model("CheckoutData",checkoutSchema);

module.exports=Checkout;