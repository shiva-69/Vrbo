import React from "react";
import {Box,Spinner } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { Footer } from "../home/footer/Footer";
import { Navbar } from "../../Components/navbar/navbar";
import PaymentLastPageStyles from "./Styles/PaymentLastPage.module.css";
export function PaymentLastPage()
{
    const [data,setData]=React.useState({});
    const [isLoading,setIsLoading]=React.useState(true);
    const [isError,setIsError]=React.useState(false);
    const toast = useToast()
    const [isSubmitted,setisSubmitted]=React.useState(false);
    const [formData,setFormData]=React.useState({
        first_name:"",
        last_name:"",
        card_number:"",
        expiry_date:"",
        cvv:"",
        street:"",
        country:"",
        city:"",
        zip_code:"",
        state:""
    });
    const handleChange=(e)=>
    {
        let {name,value}=e.target;

        setFormData({...formData,[name]:value});
        console.log(name,value)
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        let bookingData={
            checkout_data:data,
            formData:formData
        }
        console.log(formData);
        fetch("http://localhost:3001/bookings",{
            method:"POST",
            body:JSON.stringify(bookingData),
            headers:{"Content-type":"Application/json"}
        })
        .then((res)=>res.json())
        .then((res)=>
        {
            console.log(res);
        })
        setFormData({
            first_name:"",
            last_name:"",
            card_number:"",
            expiry_date:"",
            cvv:"",
            street:"",
            country:"",
            city:"",
            zip_code:"",
            state:""
        });
        
        setisSubmitted(true);
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
    
    const {first_name,last_name,card_number,expiry_date,cvv,street,country,city,zip_code,state}=formData;
    return(
        <>
        <Navbar/>
        <div className={PaymentLastPageStyles.mainContainer}>
            
            <div className={PaymentLastPageStyles.headingContainer}>
                <h1 className={PaymentLastPageStyles.heading}>Choose your payment method</h1>
            </div>
            <div className={PaymentLastPageStyles.flexbox}>
                <div className={PaymentLastPageStyles.leftContainer}>
                    <div className={PaymentLastPageStyles.leftFirstBox} >
                        <h4 className={PaymentLastPageStyles.H4Heading}>How would you like to pay?</h4>
                        <p>Safe,secure transactions. Your personal information is protected</p>
                        <div className={PaymentLastPageStyles.CardSelectionBox}>
                            <div className={PaymentLastPageStyles.CardBox} >
                                <div>
                                    <input type="checkbox" name="pay1" />
                                    <label htmlFor="payl">Pay over time</label>
                                </div>
                                <img src="https://cdn-assets.affirm.com/images/black_logo-transparent_bg.png" alt="" />
                            </div>
                            <div className={PaymentLastPageStyles.CardBox}>
                                <div>
                                    <input type="checkbox" name="pay2" />
                                    <label htmlFor="pay2">PayPal</label>
                                </div>
                                <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="" />
                            </div>
                            <div className={PaymentLastPageStyles.CardBox}>
                                <div>
                                    <input type="checkbox" name="pay3" />
                                    <label htmlFor="pay3">Credit Card</label>
                                </div>
                                <div style={{display:"flex",gap:"15px" ,alignItems:"center"}}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="" />
                                    <img src="https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Mastercard-128.png" alt="" />
                                    <img src="https://cdn0.iconfinder.com/data/icons/flat-design-business-set-3/24/payment-method-visa-128.png" alt="" />
                                </div>
                            </div>   
                        </div>
                        <div className={PaymentLastPageStyles.CardDetailsBox}>
                            <div className={PaymentLastPageStyles.CardDetails}>
                                <input type="text" 
                                       placeholder="First Name" 
                                       name="first_name"
                                       value={first_name}
                                       onChange={(e)=>(handleChange(e))} />
                                <input type="text" 
                                       placeholder="Last Name"
                                       name="last_name"
                                       value={last_name}
                                       onChange={(e)=>(handleChange(e))}
                                         />
                            </div>
                            <div className={PaymentLastPageStyles.CardDetails}>
                                <input type="text" 
                                        placeholder="Card Number"
                                        name="card_number"
                                        value={card_number}
                                        onChange={(e)=>(handleChange(e))} />
                            </div>
                            <div className={PaymentLastPageStyles.CardDetails}>
                                <input type="date" 
                                        placeholder="Expiration MM/YY"
                                        name="expiry_date"
                                        value={expiry_date}
                                        onChange={(e)=>(handleChange(e))} />
                                <input type="text"
                                         placeholder="Security code"
                                         name="cvv"
                                         value={cvv}
                                         onChange={(e)=>(handleChange(e))} />
                            </div>
                        </div>
                        <div className={PaymentLastPageStyles.BillingAddressBox}>
                            <h4>Billing address</h4>
                            <div className={PaymentLastPageStyles.CardDetails}>
                                <input type="text"
                                         placeholder="Street"
                                         name="street"
                                         value={street}
                                         onChange={(e)=>(handleChange(e))} />
                                <select name="country" value={country} onChange={(e)=>(handleChange(e))} id="">
                                    <option value=""></option>
                                    <option value="india">India</option>
                                </select>
                            </div>
                            <div className={PaymentLastPageStyles.CardDetails}>
                                <input type="text"
                                         placeholder="City" 
                                         name="city"
                                         value={city}
                                         onChange={(e)=>(handleChange(e))}/>
                                <input type="text" 
                                        placeholder="ZIP Code"
                                        name="zip_code"
                                        value={zip_code}
                                        onChange={(e)=>(handleChange(e))} />
                                <select name="state" value={state}  onChange={(e)=>(handleChange(e))} id="" placeholder="State">
                                    <option value="">State</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Delhi">Delhi</option>
                                </select>
                            </div>
                        </div> 
                    </div>
                    <div className={PaymentLastPageStyles.leftSecondBox}>
                        <div style={{display:"flex",gap:"10px"}}>
                            <svg data-id="SVG_DELAY_REFUND_COLOR__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="none" fill="none" viewBox="0 0 24 24"><path stroke="#292929" d="M8.625 8.597H4.882V4.854"></path><path stroke="#292929" d="M12.375 19.5c4.143 0 7.5-3.357 7.5-7.5A7.499 7.499 0 007.071 6.696L5.179 8.59"></path><path stroke="none" fill="#292929" fillRule="evenodd" d="M4.875 12.753c-.101 0-.2-.02-.29-.06a.658.658 0 01-.24-.17.73.73 0 01-.16-.81c.03-.09.089-.17.16-.24.07-.07.15-.13.24-.17.189-.07.39-.07.58 0a.807.807 0 01.399.41c.04.09.061.19.061.29 0 .2-.08.39-.22.52a.722.722 0 01-.53.23zM5.225 16.123h.01a.738.738 0 01.27-1.02c.35-.21.81-.09 1.02.27a.75.75 0 01-.65 1.13.758.758 0 01-.65-.38zm3.02 3.02a.742.742 0 01-.27-1.02c.2-.36.66-.49 1.02-.28a.752.752 0 01-.38 1.4.708.708 0 01-.37-.1z" clipRule="evenodd"></path><path stroke="#A5C99A" d="M13.81 9.13h-1.944a1.283 1.283 0 00-.478 2.476l1.974.789a1.284 1.284 0 01-.48 2.474h-1.941M12.375 9.13V7.697M12.375 16.304v-1.435"></path></svg>
                            <p>Non-refundable for your trip dates</p>
                        </div>
                        <p>When you book this property, oyur reservation will be confirmed instantly</p>
                    </div>
                    <div className={PaymentLastPageStyles.buttonContainer}>
                        <button onClick={(e)=>(handleSubmit(e))} >Book Now</button>
                    </div>
                </div>
                <div className={PaymentLastPageStyles.rightContainer}>
                    <div className={PaymentLastPageStyles.rightFirstBox}>
                        <svg data-id="SVG_PHONE__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M20.097 20.535c-9.304 0-16.847-7.543-16.847-16.847M20.496 18.191l.227-1.33a1.939 1.939 0 00-.966-2.017l-2.763-1.54a1.936 1.936 0 00-2.48.511l-.973 1.27-.025-.016a13.162 13.162 0 01-4.815-4.825l1.27-.973c.761-.585.98-1.642.51-2.48l-1.54-2.763a1.935 1.935 0 00-2.017-.966l-3.674.626c0 .79.054 1.565.16 2.325M15.17 8.83l2.479-2.479M16.878 10.538l2.268-.512M13.462 7.122l.512-2.268"></path></svg>
                        <div>
                            <p>For booking assistance, call <b>(1) 888-382-8909</b></p>
                            <p>Rental Number : <b>960530</b> </p>
                        </div>
                    </div>
                    <div className={PaymentLastPageStyles.rightSecondBox} >
                        <div className={PaymentLastPageStyles.imageBox}>
                            <img src={data.hotel_data.image[0]} alt="" />
                            <img src={data.hotel_data.image[1]} alt="" />
                            <img src={data.hotel_data.image[2]} alt="" />
                        </div>
                        <div style={{padding:"5px"}}>
                            <h4 className={PaymentLastPageStyles.H4Heading}>{data.hotel_data.hotel_name}</h4>
                            <p>{data.hotel_data.city}</p>
                        </div>
                    </div >    
                    <div className={PaymentLastPageStyles.rightThirdBox}>
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
                    <div className={PaymentLastPageStyles.rightFourthBox}>
                        <svg data-id="SVG_INFO__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" fillRule="evenodd" d="M11 7.958a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd"></path><path stroke="currentColor" d="M12 16.217v-5.113"></path><path stroke="currentColor" d="M2.75 12a9.25 9.25 0 1118.502.002A9.25 9.25 0 012.75 12z" clipRule="evenodd"></path></svg>
                        <div>
                            <h4 className={PaymentLastPageStyles.H4Heading}>Estimated total in INR</h4>
                            <p>You will be paying in the property's currency USD($). Exchange rate may vary.</p>
                        </div>
                    </div>
                    <div>
                        <div className={PaymentLastPageStyles.PriceBox}>
                            <p>₹{data.hotel_data.price}x2 nights</p>
                            <p>₹{data.hotel_data.price*2}</p>
                        </div>
                        <div className={PaymentLastPageStyles.PriceBox}>
                            <select name="" id="">
                                <option value="">Host Fees</option>
                                
                            </select>
                            <p>₹123</p>
                        </div>
                        <div className={PaymentLastPageStyles.PriceBox}>
                            <p>Service Fee</p>
                            <p>₹43</p>
                        </div>
                        <div className={PaymentLastPageStyles.PriceBox}>
                            <p>Tax</p>
                            <p>₹20</p>
                        </div>
                        <hr />
                        <div className={PaymentLastPageStyles.PriceBox}>
                            <h4 className={PaymentLastPageStyles.H4Heading}>Total</h4>
                            <h4 className={PaymentLastPageStyles.H4Heading}>₹ {(data.hotel_data.price*2)+123+43+20}</h4>
                        </div>
                        
                    </div>
                    <div className={PaymentLastPageStyles.rightFifthBox}>
                        <h4 className={PaymentLastPageStyles.H4Heading}>Payment Protection</h4>
                        <p>Book & Pay on Vrbo and get</p>
                        <div style={{display:"flex",flexDirection:"column",gap:"10px"}} >
                            <div className={PaymentLastPageStyles.checkBox}>
                                <img src="https://img.icons8.com/color/344/checkmark--v1.png" alt="" />
                                <p>Comprehensive Payment Protection</p>
                            </div>
                            <div className={PaymentLastPageStyles.checkBox}>
                                <img src="https://img.icons8.com/color/344/checkmark--v1.png" alt="" />
                                <p>Emergency Booking Assistance</p>
                            </div>
                            <div className={PaymentLastPageStyles.checkBox}>
                                <img src="https://img.icons8.com/color/344/checkmark--v1.png" alt="" />
                                <p>24hr Customer Service</p>
                            </div>
                        </div>
                        
                        <div className={PaymentLastPageStyles.GuaranteeBox}>
                            <img alt="Vrbo" src="https://csvcus.homeaway.com/rsrcs/stab-cms-resources/0.13.0/images/bwc/badge.svg" />
                            <a href="#">Book with Confidence Guarantee</a>
                        </div>
                        {
                           isSubmitted? toast({
                                title: 'Booking Done !',
                                description: "We have submitted your hotel booking.",
                                position: 'top',
                                status: 'success',
                                duration: 9000,
                                isClosable: true,
                              }):<></>
                        }
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
    
}