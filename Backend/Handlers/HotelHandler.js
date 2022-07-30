const Hotels=require("../Database/Hotels");


async function searchHotel(req,res,next)
{
    const {city}=req.params;
    const data=await Hotels.find({city:{$regex:`^${city}`,$options:"$i"}});
    res.status(200).send({data:data});
}

module.exports=searchHotel;