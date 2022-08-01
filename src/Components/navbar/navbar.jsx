import React ,{ useState } from "react";
import { Link } from "react-router-dom";
import LoginStatus from "./LoginStatus";
import "./module.navbar.css";
import {useSelector, useDispatch} from "react-redux"
import store from "../../redux/store";
import toggleAuth from "../../redux/auth/action";
// import jwt from "jsonwebtoken"

export const Navbar = () => {
  const [showLogin, setshowLogin] = useState(false);
  const [help, setHelp] = useState(false);
  let {auth} = useSelector(store => store.auth)
  const dispatch = useDispatch()
  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem('userId'));
    user?dispatch(toggleAuth(user)) : <div></div>;
  },[])

  const handleLogout = () =>{
    localStorage.removeItem('userId');
    dispatch(toggleAuth())
  }


  

  return (
    <div className="navbar-home">
      <div className="logo-main">
        <Link to="/">
          {" "}
          <img
            src="https://csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="menus">
        <div className="menu">
          <ion-icon name="heart-outline">
          <svg data-id="SVG_HEART__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M12 6.707S13.487 4.1 16.625 4.1c2.738 0 4.625 2.243 4.625 4.907 0 3.764-3.939 6.063-9.25 10.893-5.311-4.83-9.25-7.129-9.25-10.893C2.75 6.343 4.637 4.1 7.375 4.1 10.513 4.1 12 6.707 12 6.707z" clip-rule="evenodd"></path></svg>
          </ion-icon>
          <Link to="/tripboard">Trip Boards</Link>
        </div>

          {
            auth.name ? <div
            className="list-menu"
          >
            <ion-icon name="person-outline">
            <svg data-id="SVG_PERSON__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M4.129 19.685a20.558 20.558 0 0011.884 1.17 20.558 20.558 0 003.858-1.17"></path><path stroke="currentColor" d="M11.907 11.906c-.992 0-2.002.19-2.976.595a7.777 7.777 0 00-4.802 7.184M12.093 11.906a7.78 7.78 0 017.778 7.778"></path><path stroke="currentColor" d="M15.982 7.837a4.07 4.07 0 01-4.07 4.07h-.01a4.07 4.07 0 01-4.068-4.07V6.82a4.07 4.07 0 014.069-4.069h.01a4.07 4.07 0 014.069 4.07v1.017z" clip-rule="evenodd"></path></svg>
            </ion-icon>
            <p onClick={handleLogout} >{auth.name? auth.name : "username"}</p>
          </div>
                : <LoginStatus/>
          }

        <div className="menu drop-down">
          <div
            className="list-menu"
            onClick={() => {
              setHelp(!help);
              setshowLogin(false);
            }}
          >
            <ion-icon name="help-circle-outline">
            <svg data-id="SVG_QUESTION__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M13.02 16.747a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path><path stroke="currentColor" d="M2.7 12a9.3 9.3 0 1118.6 0 9.3 9.3 0 01-18.6 0z" clip-rule="evenodd"></path><path stroke="currentColor" d="M9.406 9.464a2.612 2.612 0 113.566 2.434 1.5 1.5 0 00-.953 1.397v.307"></path></svg>
            </ion-icon>
            <p>Help</p>
          </div>

          <div className={help ? "drop help active" : "drop"}>
            <a href="#">Traveler Help</a>
            <a href="#">Owner Help</a>
            <a href="#">Property Manager Help</a>
            <a href="#">Trust & Safety</a>
          </div>
        </div>

        <div className="menu">
          <a href="#">USD($)</a>
        </div>

        <div className="menu em">
          <img
            src="https://csvcus.homeaway.com/rsrcs-crs/baseline/5.16.0/images/flag/us.svg"
            alt=""
          />
          <a href="#">EM</a>
        </div>
      </div>

      <div className="prop">
        <p id="inputP" >List your Property</p>
      </div>
    </div>
  );
};
