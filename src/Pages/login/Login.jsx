import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "react-spinner-material";
import "./login.css";
import BackButton from "../../Components/BackButton";
import { useDispatch } from "react-redux";
import toggleAuth from "../../redux/auth/action";
<link rel="manifest" href="/manifest.webmanifest"></link>

export const Login = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()



  async function checkLogin() {
    setLoading(true);
    let mailCheck = false;
    let passCheck = false;
    // console.log("clicked");
    const res = await axios.get(
      "https://still-badlands-85906.herokuapp.com/users"
    );
    const data = res.data;
    dispatch(toggleAuth(data));
    // console.log(data);
    data.map((e) => {
      if (e.email === email && e.password === pass) {
        mailCheck = true;
        passCheck = true;
      } else if (e.email === email && e.password !== pass) {
        mailCheck = true;
        passCheck = false;
      } else {
        mailCheck = false;
        passCheck = false;
      }
    });

    if (mailCheck === true && passCheck === true) {
      setLoading(false);
      alert("Login Success");
      navigate("/");
      //navigate to home
    } else if (mailCheck === true && passCheck === false) {
      alert("Wrong Password");
    } else {
      alert("User does not exist");
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
          <Link to="/register">Create one</Link>
        </p>

        <p>or continue with</p>
        <div className="Continue-with">
          <img src="https://a.travel-assets.com/egds/marks/apple.svg" alt="" />
          <img
            src="https://a.travel-assets.com/egds/marks/facebook.svg"
            alt=""
          />
          <img src="https://a.travel-assets.com/egds/marks/google.svg" alt="" />
        </div>
        <hr />
      </div>
    </>
  );
};
