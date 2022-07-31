import React, { useState } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { Navbar } from "../../Components/navbar/navbar";
import { Footer } from "../home/footer/Footer";
import "./trips.css"


const TripBoard = () => {
    const { auth } = useSelector(store => store.auth)
    const [trips,setTrips] = useState([])
      if(auth){
        fetch("")
      }
    return (<React.Fragment>
        <Navbar/>
        <div className="main">
            
            <div className="trips" >
                <h2>Trip Boards</h2>
                <p> <Link to="/login">Login  </Link>to see all your trips</p>
                <div>

                </div>
            </div>

            <div className="imageDiv" >
                <div className="images">
                <h3>Weekend escape</h3>
                    <div className="imageCart" >
                        <div className="image1">

                        </div>
                        <div>
                        <div className="image2"></div>
                        <div className="image3"></div>
                        </div>
                        
                    </div>
                    
                   
                </div>
            </div>
        </div>
     <Footer/>


    </React.Fragment>)
}

export default TripBoard