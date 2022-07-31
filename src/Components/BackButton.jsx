import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./backButton.css"


const BackButton = ()=>{
    const navigate = useNavigate();

    return <React.Fragment>
        <div className="Nav">
        <div id="back-image"  onClick={() => navigate("/")}>
        <svg><path d="M20.76 11.26H5.06L8.8 7.54a.75.75 0 10-1.06-1.06l-4.98 4.98a.74.74 0 00-.19.85c.05.1.1.18.19.25l4.98 4.98a.75.75 0 101.06-1.06l-3.72-3.72h15.69a.75.75 0 000-1.5z"></path></svg>
           
          
        
        </div>
        <div className="logo" onClick={() => navigate("/")}>
          <img
            src="https://csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg"
            id="icon-image"
            alt=""
          />
        </div>
        </div>


        

    </React.Fragment>
}
export default BackButton;