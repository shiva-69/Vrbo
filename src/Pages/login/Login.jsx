import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "react-spinner-material";
import "./login.css";
import BackButton from "../../Components/BackButton";
import { useDispatch } from "react-redux";
import toggleAuth from "../../redux/auth/action";
import GoogleAuth from "../../Components/context/googleAuth";

import { Warning } from "../../Components/warning/Warning";
<link rel="manifest" href="/manifest.webmanifest"></link>

import jwt_decode from "jwt-decode";
<link rel="manifest" href="/manifest.webmanifest"></link>;


export const Login = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const [wrong,setWrong] = useState(false);
  const [warrningMsg,setWarrningMsg] = useState()


  const dispatch = useDispatch();


  async function checkLogin() {
    setLoading(true);
    let mailCheck = false;
    let passCheck = false;

    const payload = {
      email: email,
      password: pass,
    };
    var emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;


    if (!email || !pass ){
      setWrong(true)
      setTimeout(() => {
        setWrong(false)
      },3000);
      setWarrningMsg(
        "Please fill the details"
      )
     }
        else if( email.match(emailValidate) &&
pass.match(passValidate)){

    fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then((res) => res.json())

    if (email.match(emailValidate) && pass.match(passValidate)) {
      fetch("http://localhost:3001/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())

        .then((res) => {
          console.log(res)
          let decoded = jwt_decode(res.token);
          dispatch(toggleAuth(decoded));
          localStorage.setItem("userId", JSON.stringify(decoded));
          navigate("/");

        })
  }
  else if( !(email.match(emailValidate))){
    setWrong(true)
        setTimeout(() => {
          setWrong(false)
        },3000);
        setWarrningMsg("Please enter a valid email")

  }else{
    setWrong(true)
        setTimeout(() => {
          setWrong(false)
        },3000);
        setWarrningMsg(
          "Password should contain 6-20 characters,one number, one lowercase and an uppercase character"
        )
  }
    

        });
    } else if (!email.match(emailValidate)) {
      window.alert("wrong password");
    } else {
      window.alert("worng E-mail id");
    }


    // console.log(data);

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
      <BackButton />
      <div className="notification">
        {
          wrong? <Warning message={warrningMsg} /> : <div></div>
        }
        </div>
      <div className="Sign-in-box">
        <h2>Sign in</h2>
        <input
          type="text"
          placeholder="Email address"
          className="Input-boxes"
          onChange={(e) => {
            setEmail(e.target.value);
            // console.log(email);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="Input-boxes"
          onChange={(e) => {
            setPass(e.target.value);
            // console.log(pass);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              checkLogin();
            }
          }}
        />
        <div>
          {/* <input type="radio" value="true" id="radio-sign" /> */}
          {/* <label for="radio-sign"> Keep me signed in</label> */}
        </div>
        <p>
          By signing in, I agree to the Vrbo Terms and Contitions and Privacy
          Statement
        </p>
        <button id="Sign-in-button" onClick={checkLogin}>
          {" "}
          Sign in
        </button>

        <p>Forgot password ?</p>
        <p>
          Don't have an account?
          <Link to="/signup">Create one</Link>
        </p>

        <p>or continue with</p>

        <div className="googleauth">
          <GoogleAuth />
        </div>
      </div>
    </>
  );
};
