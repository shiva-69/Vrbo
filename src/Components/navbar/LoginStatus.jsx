
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./module.navbar.css";



const LoginStatus = () =>{
    const [showLogin, setshowLogin] = useState(false);
    const [help, setHelp] = useState(false);

    return ( <React.Fragment>
        <div className="menu drop-down">
          <div
            className="list-menu"
            onClick={() => {
              setshowLogin(!showLogin);
              setHelp(false);
            }}
          >
            <ion-icon name="person-outline">
            <svg data-id="SVG_PERSON__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M4.129 19.685a20.558 20.558 0 0011.884 1.17 20.558 20.558 0 003.858-1.17"></path><path stroke="currentColor" d="M11.907 11.906c-.992 0-2.002.19-2.976.595a7.777 7.777 0 00-4.802 7.184M12.093 11.906a7.78 7.78 0 017.778 7.778"></path><path stroke="currentColor" d="M15.982 7.837a4.07 4.07 0 01-4.07 4.07h-.01a4.07 4.07 0 01-4.068-4.07V6.82a4.07 4.07 0 014.069-4.069h.01a4.07 4.07 0 014.069 4.07v1.017z" clip-rule="evenodd"></path></svg>
            </ion-icon>
            <p>Log in</p>
          </div>

          <div className={showLogin ? "drop login active" : "drop"}>
            <Link to="/login">Traveler Login</Link>
            <a href="#">Owner Login</a>
          </div>
        </div>

        <div className="menu">
          <ion-icon name="person-add-outline">
          <svg data-id="SVG_INVITE__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M17.174 14.344v5.322M14.513 17.005h5.322M4.165 19.685a20.536 20.536 0 007.871 1.565M11.944 11.906a7.735 7.735 0 00-2.976.595 7.777 7.777 0 00-4.802 7.184"></path><path stroke="currentColor" d="M16.018 7.837a4.07 4.07 0 01-4.07 4.07h-.01a4.07 4.07 0 01-4.068-4.07V6.82a4.07 4.07 0 014.069-4.069h.01a4.07 4.07 0 014.069 4.07v1.017z" clip-rule="evenodd"></path></svg>
          </ion-icon>
          <Link to="/signup">Sign up</Link>
        </div>
    </React.Fragment>
    )
}

export default LoginStatus;