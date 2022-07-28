const express = require("express");
const {RegisterUser, Login}= require("../Handlers/UserHandlers");
const UserRouter = express.Router();

UserRouter.post("/register",RegisterUser );
UserRouter.post("/login", Login);

module.exports = UserRouter;