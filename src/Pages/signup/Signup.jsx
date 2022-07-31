import React from "react";
import BackButton from "../../Components/BackButton";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Spinner from "react-spinner-material";
import "./signup.css";
import GoogleAuth from "../../Components/context/googleAuth";




const Signup = ()=>{
    const [email, setEmail] = useState();
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [pass, setPass] = useState();
    const [loading, setLoading] = useState(false);
    var emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    //name should only contain letters
    var nameValidate = /^[a-zA-Z]+$/;
  
    // pass : 6-20 char, one num, one uppercase, one lowercase
    var passValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    const navigate = useNavigate();
    function registerUser() {
      setLoading(true);
      const user = { 
        name : first_name + ' ' + last_name ,
        email: email,
        password: pass,
      };
      let data = {
        user : user,
      }
      console.log(data)
  
      if (
        email.match(emailValidate) &&
        first_name !== "" &&
        last_name !== "" &&
        pass.match(passValidate)
      ) {
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
          navigate("/login");
        })
      } else if (!email.match(emailValidate)) {
        alert("Please enter a valid email");
      } else if (!pass.match(passValidate)) {
        alert(
          "Password should contain 6-20 characters,one number, one lowercase and an uppercase character"
        );
      }
      setLoading(false);
    }
    return loading ? (
      <div className="loader">
        <Spinner
          size={120}
          spinnerColor={"#333"}
          spinnerWidth={2}
          visible={true}
        />
      </div>
    ) : (
      <>
        <BackButton/>
        <div className="Register-box">
          <h2>Create an account</h2>
          <input
            type="text"
            placeholder="Email address"
            className="Input-boxes-R"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
  
          <input
            type="text"
            placeholder="First name"
            className="Input-boxes-R"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
  
          <input
            type="text"
            placeholder="Last name"
            className="Input-boxes-R"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
  
          <input
            type="password"
            placeholder="Password"
            className="Input-boxes-R"
            onChange={(e) => {
              setPass(e.target.value);
              // console.log(pass);
            }}
          />
  
          <p>
            By creating an account, I agree to the Vrbo Terms and Conditions and
            Privacy Statement.
          </p>
  
          <button id="Continue-button" onClick={registerUser}>
            Continue
          </button>
  
          <p>
            Already have an account?
            <Link to="/login">Sign in</Link>{" "}
          </p>
          <p>or continue with</p>
  
          
          <div className="googleauth" ><GoogleAuth/></div>
        </div>
      </>
    );
}

export default Signup;