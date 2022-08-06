import React from "react";
import {Box,Spinner } from "@chakra-ui/react";
import TripBoardStyles from "./TripBoard.module.css";
import { Footer } from "../home/footer/Footer";
import { Navbar } from "../../Components/navbar/navbar";
export function TripBoard()
{
    let user_email= JSON.parse(localStorage.getItem("userId")).email;
    const [bookings,setBookings]=React.useState([]);
    const [isLoading,setIsLoading]=React.useState(true);
    const [isError,setIsError]=React.useState(false);
    const handleDelete=(id)=>
    {
        fetch(`https://young-shelf-48162.herokuapp.com/bookings/${id}`,{
            method:"DELETE"
        })
        fetch(`https://young-shelf-48162.herokuapp.com/bookings/${user_email}`)
        .then((res)=>res.json())
        .then((res)=>
        {       
            setIsError(false);
            setBookings(res.data);
            console.log(res);
        })
        .catch((error)=>
        {
            setIsError(true);
            console.log(error);
        })
        .finally(()=>setIsLoading(false));
    }
    React.useEffect(()=>
    {   
       
       
        fetch(`https://young-shelf-48162.herokuapp.com/bookings/${user_email}`)
        .then((res)=>res.json())
        .then((res)=>
        {       
            setIsError(false);
            setBookings(res.data);
            console.log(res);
        })
        .catch((error)=>
        {
            setIsError(true);
            console.log(error);
        })
        .finally(()=>setIsLoading(false));
    },[])
    if(isLoading)
    {
        return (
            
            <Box textAlign="center" marginTop="250px">
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                textAlign="center"
            />
            </Box>
        );
    }
    if(isError)
    {
        return (
            <h1>Error...</h1>
        )
    }
    
    return(
        <>
        <Navbar/>
        <div className={TripBoardStyles.mainContainer} >
            <div className={TripBoardStyles.leftContainer}>
            {
                bookings.length!==0?
                <div className={TripBoardStyles.BookingsContainer}>
                    <h1 className={TripBoardStyles.heading} >Trip Board</h1>
                    <h2 className={TripBoardStyles.WelcomeTitle}>Hai {bookings[0].checkout_data.user_data.name?bookings[0].checkout_data.user_data.name:"User"} ! Welcome to your Trip Board.</h2>
                    <div className={TripBoardStyles.Bookings}>
                        {
                            bookings?.map((item)=>(
                                <div key={item._id}>
                                    <div>
                                        <img className={TripBoardStyles.HotelImage} src={item.checkout_data.hotel_data.image[0]?item.checkout_data.hotel_data.image[0]:""} alt="" />
                                    </div>
                                    <div>
                                        <h2 style={{fontSize:"17px",fontWeight:"600"}}>{item.checkout_data.hotel_data.hotel_name?item.checkout_data.hotel_data.hotel_name:""}</h2>
                                        <h3 style={{fontSize:"17px",fontWeight:"600"}}>{item.checkout_data.hotel_data.city?item.checkout_data.hotel_data.city:""}</h3>
                                    </div>
                                    <div>
                                        {item.checkout_data.check_in_date?<h2><b> Check in Date :</b> {item.checkout_data.check_in_date.slice(0,10).split("-").reverse().join("-")}</h2>:<></>}
                                        {item.checkout_data.check_out_date?<h2> <b> Check out Date:</b>  {item.checkout_data.check_out_date.slice(0,10).split("-").reverse().join("-")}</h2>:<></>}
                                        {item.checkout_data.number_of_guests?<h2><b> Number of Guests:</b>  {item.checkout_data.number_of_guests}</h2>:<></>}
                                    </div>
                                    <div className={TripBoardStyles.buttonContainer}>
                                        <button onClick={()=>(handleDelete(item._id))} >Cancel this Booking</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                : 
                <div style={{width:"1000px"}} className={TripBoardStyles.BookingsContainer}>
                    <h1 className={TripBoardStyles.heading} >Trip Board</h1>
                    <h2 className={TripBoardStyles.WelcomeTitle}>Hai ! Welcome to your Trip Board.</h2>
                    <div className={TripBoardStyles.Bookings} style={{width:"100%"}}>
                        <div >
                            <h1 style={{fontSize:"40px"}}>There is no recent bookings</h1>
                        </div>
                    </div>
                </div>
            }
            </div>
            <div className={TripBoardStyles.rightContainer}>
                <div  className={TripBoardStyles.rightImageBox}>
                    <div className={TripBoardStyles.rightImageLayoutFirst} >
                        <h2 style={{fontSize:"20px",fontWeight:"600"}}>Weekend escape</h2>
                        <div className={TripBoardStyles.rightImageLayout}>
                            <img src="https://csvcus.homeaway.com/rsrcs/traveler-tripboards-ui/onboarding/Scene-5/S1_Img1.png" alt="" />

                            <div style={{display:"flex", flexDirection:"column",gap:"10px"}}>
                                <img src="https://csvcus.homeaway.com/rsrcs/traveler-tripboards-ui/onboarding/Scene-5/S1_Img%202.png" alt="" />
                                <img src="https://csvcus.homeaway.com/rsrcs/traveler-tripboards-ui/onboarding/Scene-5/S1_Img%203.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div  className={TripBoardStyles.rightImageBox} style={{flexDirection:"row-reverse"}}>
                    <div className={TripBoardStyles.rightImageLayoutFirst}  >
                        <h2 style={{fontSize:"20px",fontWeight:"600"}}>Countryside homes</h2>
                        <div className={TripBoardStyles.rightImageLayout}>
                            <img src="https://csvcus.homeaway.com/rsrcs/traveler-tripboards-ui/onboarding/Scene-5/S1C3_Img1.png" alt="" />
                           
                            <div style={{display:"flex", flexDirection:"column",gap:"10px"}}>
                                <img src="https://csvcus.homeaway.com/rsrcs/traveler-tripboards-ui/onboarding/Scene-5/S1C3_Img2.png" alt="" />
                                <img src="https://csvcus.homeaway.com/rsrcs/traveler-tripboards-ui/onboarding/Scene-5/S1C3_Img3.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                
            </div>
        
        </div>
        <Footer/>
        </>
    )
}