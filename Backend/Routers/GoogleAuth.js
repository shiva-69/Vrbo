const express = require("express");
const Router = express.Router();
const cors = require("cors");
const passport = require("passport");



const GoogleStrategy = require('passport-google-oauth20').Strategy;

Router.use(cors());

Router.use(passport.initialize());
Router.use(passport.session());

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
},
function(accessToken, activeToken, profile, done){
    done(null, {})
}
))

Router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }))

Router.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), (req,res)=>{
    console.log("success");
    // res.redirect('/');
})
Router.get("/login",(req, res) =>{
    return res.send("cant log you in");
} )

module.exports = Router;