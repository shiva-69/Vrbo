import React from "react";  
import HotelListingStyles from "./HotelListing.module.css";
import StarsRating from 'stars-rating'
import heart from "../HotelListingPage/heart.png";
import {Box,Spinner } from "@chakra-ui/react";
function HotelListing()
{
    const [hotels,setHotel]=React.useState([]);
    const [isLoading,setIsLoading]=React.useState(true);
    const [isError,setIsError]=React.useState(false);
    let city="Delhi";
    React.useEffect(()=>
    {
        fetch(`http://localhost:3001/hotel/${city}`)
        .then((res)=>res.json())
        .then((res)=>
        {  
            setIsError(false);
            setHotel(res.data);
            console.log(res.data);
        })
        .catch((error)=>
        {
            setIsError(true);
            console.log(error);
        })
        .finally(()=>setIsLoading(false));
    },[city])
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

    return (
        <div className={HotelListingStyles.mainContainer}>
            <div className={HotelListingStyles.resultsContainer}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <h1 className={HotelListingStyles.cityName} >{city}</h1>
                    <div style={{display:"flex",justifyContent:"space-between",gap:"10px",alignItems:"center"}}>
                        <p className={HotelListingStyles.heading1}>10 properties</p>
                        <label className={HotelListingStyles.heading1} htmlFor="sortBtn">Sort</label>
                        <select name="sortBtn" className={HotelListingStyles.sortBtn}>
                            <option value=""></option>
                            <option value="default">Recommended</option>
                            <option value="lowtohigh">Price: Low to high</option>
                            <option value="hightolow">Price: High to Low</option>
                            <option value="rating">Guest Rating</option>
                            <option value="reviews">Number of reviews</option>
                        </select>
                    </div>
                </div>
                <div style={{display:"flex",justifyContent:"",gap:"15px",padding:"10px",alignItems:"center",border:"1px solid rgb(212, 205, 205)",borderRadius:"6px"}}>
                    <svg data-id="SVG_DELAY_REFUND_COLOR__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="none" fill="none" viewBox="0 0 24 24"><path stroke="#292929" d="M8.625 8.597H4.882V4.854"></path><path stroke="#292929" d="M12.375 19.5c4.143 0 7.5-3.357 7.5-7.5A7.499 7.499 0 007.071 6.696L5.179 8.59"></path><path stroke="none" fill="#292929" fillRule="evenodd" d="M4.875 12.753c-.101 0-.2-.02-.29-.06a.658.658 0 01-.24-.17.73.73 0 01-.16-.81c.03-.09.089-.17.16-.24.07-.07.15-.13.24-.17.189-.07.39-.07.58 0a.807.807 0 01.399.41c.04.09.061.19.061.29 0 .2-.08.39-.22.52a.722.722 0 01-.53.23zM5.225 16.123h.01a.738.738 0 01.27-1.02c.35-.21.81-.09 1.02.27a.75.75 0 01-.65 1.13.758.758 0 01-.65-.38zm3.02 3.02a.742.742 0 01-.27-1.02c.2-.36.66-.49 1.02-.28a.752.752 0 01-.38 1.4.708.708 0 01-.37-.1z"clipRule="evenodd"></path><path stroke="#A5C99A" d="M13.81 9.13h-1.944a1.283 1.283 0 00-.478 2.476l1.974.789a1.284 1.284 0 01-.48 2.474h-1.941M12.375 9.13V7.697M12.375 16.304v-1.435"></path></svg>
                    <div>
                        <p>Need flexibility? We've got you</p>
                        <p className={HotelListingStyles.heading1}>Some places let you cancel for free closer to your check-in date.Check the property's policy for details</p>
                    </div>
                </div>
                
                {  hotels.map((item)=>
                ( <>
                    <div key={item._id} className={HotelListingStyles.hoteldiv}>
                        <img className={HotelListingStyles.hotelImage} src={item.image[0]} alt="" />
                        <div>
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className={HotelListingStyles.heading1}>Apartment - {Math.floor(Math.random()*15)} mi to {city} center</p>
                                <img  style={{width:"16px", height:"19px"}}src={heart} alt="" />
                            </div>
                            
                            <h4 className={HotelListingStyles.hotelName}>{item.hotel_name}</h4>
                            <p className={HotelListingStyles.heading1}>Sleeps 8 - 2 Bedroom</p>
                            <div className={HotelListingStyles.cancellationContainer}>
                                <p>Free cancellation upto 30 days before checkin </p>
                            </div>
                            <div className={HotelListingStyles.priceandratingContainer}>
                                <div className={HotelListingStyles.ratingDiv} >
                                    <StarsRating  count={1} value={1} size={20} color2={"gray"} />
                                    <p >{item.rating} rating on other travel site </p>
                                </div>
                                <div>
                                    <h4>₹ {item.price} avg/night</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                  </>  
                ))
                    
                }
            </div>
            <div>
                <iframe  title="1" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCmNx0FqAPkI9rcXbzErEMQAh4bMkQwn1E&q=${city}`} frameBorder=""className={HotelListingStyles.map}></iframe>
            </div>
        </div>
        
        
    )
}

export default HotelListing;