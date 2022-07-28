const mongoose=require("mongoose");

const hotelSchema=new mongoose.Schema({
    id:Number,
    hotel_name:String,
    city:String,
    image:[String],
    rating:Number,
    price:Number,
    description:String
});

const Hotels=mongoose.model("Hotel",hotelSchema);

module.exports=Hotels;