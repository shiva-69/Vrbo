import React from "react"; 
import PaymentBeginStyles from "./Styles/PaymentBegin.module.css"; 
import {Box,Spinner } from "@chakra-ui/react";
import {useNavigate} from "react-router-dom"


export function PaymentBegin()
{

    
    const [data,setData]=React.useState({});
    const [isLoading,setIsLoading]=React.useState(true);
    const [isError,setIsError]=React.useState(false);
    const navigate=useNavigate();
    const handleNavigate=()=>
    {
        navigate("/finalPayment");
    }
   
    React.useEffect(()=>
    {   
       
       
        fetch("http://localhost:3001/checkout")
        .then((res)=>res.json())
        .then((res)=>
        {       
            setIsError(false);
            setData(res.data);
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
    
        
       <div className={PaymentBeginStyles.mainContainer}>
            
            <div className={PaymentBeginStyles.headingContainer}>
                <h1 className={PaymentBeginStyles.heading}>Begin your booking</h1>
            </div>
            <div className={PaymentBeginStyles.flexbox}>
                <div className={PaymentBeginStyles.leftContainer}>
                    <div className={PaymentBeginStyles.leftFirstBox}>
                        <h4 className={PaymentBeginStyles.H4Heading}>Book with confidence. Guaranteed</h4>
                        <p>You're covered when you book and pay on Vrbo</p>
                        <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
                            <svg data-id="SVG_ALARM__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M4.37 6.274l1.5-1.5M18.13 4.774l1.5 1.5M14.809 9.53l-2.876 2.874M9.146 12.404H12M18 19.318l-1-1M6.781 18.318l-1 1"></path><path stroke="currentColor" d="M5.086 12.404a6.914 6.914 0 1113.829.003 6.914 6.914 0 01-13.829-.003z" clipRule="evenodd"></path><path fill="currentColor" stroke="none" fillRule="evenodd" d="M10.75 12.404a1.251 1.251 0 012.5 0 1.25 1.25 0 01-2.5 0z" clipRule="evenodd"></path></svg>
                            <div style={{display:"flex",alignItems:"center"}}>
                                <h5 style={{margin:"0px"}}>Act fast!</h5>
                                <p style={{margin:"0px"}}>Price and availability may change</p>
                            </div>
                            
                        </div>
                        <div style={{display:"flex",alignItems:"center",gap:"5px"}} >
                            <svg data-id="SVG_DELAY_REFUND_COLOR__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="none" fill="none" viewBox="0 0 24 24"><path stroke="#292929" d="M8.625 8.597H4.882V4.854"></path><path stroke="#292929" d="M12.375 19.5c4.143 0 7.5-3.357 7.5-7.5A7.499 7.499 0 007.071 6.696L5.179 8.59"></path><path stroke="none" fill="#292929" fillRule="evenodd" d="M4.875 12.753c-.101 0-.2-.02-.29-.06a.658.658 0 01-.24-.17.73.73 0 01-.16-.81c.03-.09.089-.17.16-.24.07-.07.15-.13.24-.17.189-.07.39-.07.58 0a.807.807 0 01.399.41c.04.09.061.19.061.29 0 .2-.08.39-.22.52a.722.722 0 01-.53.23zM5.225 16.123h.01a.738.738 0 01.27-1.02c.35-.21.81-.09 1.02.27a.75.75 0 01-.65 1.13.758.758 0 01-.65-.38zm3.02 3.02a.742.742 0 01-.27-1.02c.2-.36.66-.49 1.02-.28a.752.752 0 01-.38 1.4.708.708 0 01-.37-.1z" clipRule="evenodd"></path><path stroke="#A5C99A" d="M13.81 9.13h-1.944a1.283 1.283 0 00-.478 2.476l1.974.789a1.284 1.284 0 01-.48 2.474h-1.941M12.375 9.13V7.697M12.375 16.304v-1.435"></path></svg>
                            <p>Non-refundable for your trip dates</p>
                        </div>
                    </div>
                    <div className={PaymentBeginStyles.leftSecondBox}>
                        <h4 className={PaymentBeginStyles.H4Heading}>Enter contact information</h4>
                        <div className={PaymentBeginStyles.ContactForm} style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                            <div style={{display:"flex",gap:"10px"}}>
                                <input type="text" placeholder="First Name" value={data.user_data.name.split(" ")[0]} onChange={(e)=>(e.target.value)}/>
                                <input type="text" placeholder="Last Name" value={data.user_data.name.split(" ")[1]} onChange={(e)=>(e.target.value)}/>
                            </div>
                            <div style={{display:"flex",gap:"10px"}}>
                                <input type="text" placeholder="Email" value={data.user_data.email} onChange={(e)=>(e.target.value)} />
                                <select >
                                    <option value="">+91</option>
                                </select>
                                <input type="text" placeholder="Mobile phone" onChange={(e)=>(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className={PaymentBeginStyles.leftThirdBox}>
                        <h4 className={PaymentBeginStyles.H4Heading}>Tell the host about your trip</h4>
                        <p>Let them know who you are travelling with and what brings you to the area</p>
                        <div className={PaymentBeginStyles.Avatar}>
                            <img src="https://mediaim.expedia.com/lodgingprofile/31550489/d2d9aacb-c0c8-4565-8b22-2ac83749bc45.c1.jpg" alt="" />
                            <div>
                                <p>Speaks: english, Hindi, Marathi</p>
                                <h4 className={PaymentBeginStyles.H4Heading}>Dr. Tejashree Date</h4>
                            </div>
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Your message.. (optional)"></textarea>
                    </div>
                    <p>By clicking 'Agree & continue' you are agreeing to our <a href="">Terms and conditions</a>,<a href="">Privacy Policy</a>,and to receive booking-related texts.
                    Standard messaging rates may apply.</p>
                    <div className={PaymentBeginStyles.buttonContainer}>
                        <button onClick={handleNavigate}>Agree & continue</button>
                    </div>
                </div>
                <div className={PaymentBeginStyles.rightContainer}>
                    <div className={PaymentBeginStyles.rightFirstBox}>
                        <svg data-id="SVG_PHONE__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M20.097 20.535c-9.304 0-16.847-7.543-16.847-16.847M20.496 18.191l.227-1.33a1.939 1.939 0 00-.966-2.017l-2.763-1.54a1.936 1.936 0 00-2.48.511l-.973 1.27-.025-.016a13.162 13.162 0 01-4.815-4.825l1.27-.973c.761-.585.98-1.642.51-2.48l-1.54-2.763a1.935 1.935 0 00-2.017-.966l-3.674.626c0 .79.054 1.565.16 2.325M15.17 8.83l2.479-2.479M16.878 10.538l2.268-.512M13.462 7.122l.512-2.268"></path></svg>
                        <div>
                            <p>For booking assistance, call <b>(1) 888-382-8909</b></p>
                            <p>Rental Number : <b>960530</b> </p>
                        </div>
                    </div>
                    <div className={PaymentBeginStyles.rightSecondBox} >
                        <div className={PaymentBeginStyles.imageBox}>
                            <img src={data.hotel_data.image[0]} alt="" />
                            <img src={data.hotel_data.image[1]} alt="" />
                            <img src={data.hotel_data.image[2]} alt="" />
                        </div>
                        <div style={{padding:"5px"}}>
                            <h4 className={PaymentBeginStyles.H4Heading}>{data.hotel_data.hotel_name}</h4>
                            <p>{data.hotel_data.city}</p>
                        </div>
                    </div >    
                    <div className={PaymentBeginStyles.rightThirdBox}>
                        <div style={{display:"flex",justifyContent:"",gap:"5px"}}>
                            <div style={{border:"1px solid rgb(202, 187, 187)",width:"50%",padding:"5px",borderRadius:"2px",backgroundColor:"white"}}>
                                <p style={{fontSize:"12px"}}>Check In</p>
                                <p>{data.check_in_date.toString().slice(0,10).split("-").reverse().join('-')}</p>
                            </div>
                            <div style={{border:"1px solid rgb(202, 187, 187)",width:"50%",padding:"5px",borderRadius:"2px",backgroundColor:"white"}}>
                                <p style={{fontSize:"12px"}}>Check out</p>
                                <p>{data.check_out_date.toString().slice(0,10).split("-").reverse().join('-')}</p>
                            </div>
                        </div>
                        <div style={{padding:"5px",border:"1px solid rgb(202, 187, 187)",borderRadius:"2px",backgroundColor:"white"}}>
                            <p>Number of guests</p>
                            <p>{data.number_of_guests}</p>
                        </div>
                    </div>
                    <div className={PaymentBeginStyles.rightFourthBox}>
                        <svg data-id="SVG_INFO__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" fillRule="evenodd" d="M11 7.958a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd"></path><path stroke="currentColor" d="M12 16.217v-5.113"></path><path stroke="currentColor" d="M2.75 12a9.25 9.25 0 1118.502.002A9.25 9.25 0 012.75 12z" clipRule="evenodd"></path></svg>
                        <div>
                            <h4 className={PaymentBeginStyles.H4Heading}>Estimated total in INR</h4>
                            <p>You will be paying in the property's currency USD($). Exchange rate may vary.</p>
                        </div>
                    </div>
                    <div>
                        <div className={PaymentBeginStyles.PriceBox}>
                            <p>₹{data.hotel_data.price}x2 nights</p>
                            <p>₹{data.hotel_data.price*2}</p>
                        </div>
                        <div className={PaymentBeginStyles.PriceBox}>
                            <select name="" id="">
                                <option value="">Host Fees</option>
                                
                            </select>
                            <p>₹123</p>
                        </div>
                        <div className={PaymentBeginStyles.PriceBox}>
                            <p>Service Fee</p>
                            <p>₹43</p>
                        </div>
                        <div className={PaymentBeginStyles.PriceBox}>
                            <p>Tax</p>
                            <p>₹20</p>
                        </div>
                        <hr />
                        <div className={PaymentBeginStyles.PriceBox}>
                            <h4 className={PaymentBeginStyles.H4Heading}>Total</h4>
                            <h4 className={PaymentBeginStyles.H4Heading}>₹ {(data.hotel_data.price*2)+123+43+20}</h4>
                        </div>
                        
                    </div>
                    <div className={PaymentBeginStyles.rightFifthBox}>
                        <h4 className={PaymentBeginStyles.H4Heading}>Payment Protection</h4>
                        <p>Book & Pay on Vrbo and get</p>
                        <div style={{display:"flex",flexDirection:"column",gap:"10px"}} >
                            <div className={PaymentBeginStyles.checkBox}>
                                <img src="https://img.icons8.com/color/344/checkmark--v1.png" alt="" />
                                <p>Comprehensive Payment Protection</p>
                            </div>
                            <div className={PaymentBeginStyles.checkBox}>
                                <img src="https://img.icons8.com/color/344/checkmark--v1.png" alt="" />
                                <p>Emergency Booking Assistance</p>
                            </div>
                            <div className={PaymentBeginStyles.checkBox}>
                                <img src="https://img.icons8.com/color/344/checkmark--v1.png" alt="" />
                                <p>24hr Customer Service</p>
                            </div>
                        </div>
                        
                        <div className={PaymentBeginStyles.GuaranteeBox}>
                            <img alt="Vrbo" src="https://csvcus.homeaway.com/rsrcs/stab-cms-resources/0.13.0/images/bwc/badge.svg" />
                            <a href="#">Book with Confidence Guarantee</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}