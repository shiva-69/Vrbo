const Checkout=require("../Database/Checkout");
const UserModel=require("../Database/Users");
const Hotels=require("../Database/Hotels");


async function getData(req,res,next)
{
   const data=await Checkout.find();
   let user_data=await UserModel.findOne({email:data[data.length-1].user_email});
   let hotel_data=await Hotels.findOne({_id:data[data.length-1].hotel_id});

   const checkoutData={
    user_data:user_data,
    hotel_data:hotel_data,
    check_in_date:data[data.length-1].check_in_date,
    check_out_date:data[data.length-1].check_out_date,
    number_of_guests:data[data.length-1].Number_of_guests
   }

   return res.status(200).send({data:checkoutData});

}

async function createCheckout(req,res,next)
{
    const {user_email,hotel_id,check_in_date,check_out_date,number_of_guests}=req.body;

    

    await Checkout.create({
        user_email:user_email,
        hotel_id:hotel_id,
        check_in_date:check_in_date,
        check_out_date:check_out_date,
        Number_of_guests:number_of_guests
    },(err, result) => {
        if(err){
            return res.status(424).send({
                error: err
            })
            
        }
        return res.status(201).send(result);})


}

module.exports={
                getData,
                createCheckout
}