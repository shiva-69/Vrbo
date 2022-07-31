const Bookings =require("../Database/Bookings");

async function createBooking(req,res,next)
{
    const body=req.body;
    await Bookings.create(body,(err, result) => {
        if(err){
            return res.status(424).send({
                error: err
            })
            
        }
        return res.status(201).send(result);});
    
}

async function getBookingData(req,res,next)
{
    const {user_email}=req.params;
   const bookingData= await Bookings.find({"checkout_data.user_data.email":user_email})
    res.status(200).json({data:bookingData});

}

module.exports={createBooking,
                getBookingData}