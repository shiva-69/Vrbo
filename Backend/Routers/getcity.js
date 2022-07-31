const express = require("express");
const getCity = require("../Handlers/getCity");

const getCityRouter = express.Router()

getCityRouter.get('/city/:name', getCity)

module.exports = getCityRouter;