const mongoose=require("mongoose");

const bookingSchema=new mongoose.Schema({
    checkout_data:{
    user_data:{
        _id: mongoose.Types.ObjectId,
        name: String,
        email: String,
        password: String,
        __v: Number
    },
    hotel_data:{
        _id: mongoose.Types.ObjectId,
        id: Number,
        hotel_name: String,
        city: String,
        image:[String],
        rating: Number,
        price: Number,
        description: String,
        __v: Number
    },
    check_in_date:Date,
    check_out_date:Date,
    number_of_guests:Number    
    },
    formData:{
        first_name:String,
        last_name:String,
        card_number:Number,
        expiry_date:Date,
        cvv:Number,
        street:String,
        country:String,
        city:String,
        zip_code:Number,
        state:String

    }
});

const Bookings=mongoose.model("Booking",bookingSchema);

module.exports=Bookings;