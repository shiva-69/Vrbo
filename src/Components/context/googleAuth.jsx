import { GoogleLogin } from '@react-oauth/google';
// import jwt from "jsonwebtoken"
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import toggleAuth from '../../redux/auth/action';




const GoogleAuth = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <GoogleLogin
  onSuccess={credentialResponse => {
      const credential = credentialResponse.credential;
      console.log(credential)
    const {email,name} =  jwt_decode(credential)
    const user = {
        name : name,
        email : email
    }
    const data = {user : user}
    fetch("http://localhost:3001/register",{
        method : "POST",
        body : JSON.stringify(data),
        headers : {
          'content-type': 'application/json'
        }
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        // if(res.error){
        //     dispatch(toggleAuth(user))
        // }
        dispatch(toggleAuth(user))
        localStorage.setItem("userId",JSON.stringify(user));
        navigate("/");
      })
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
    )
}
export default GoogleAuth;