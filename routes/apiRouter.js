const express = require("express");
const Router = express.Router();
const apiController = require("../controllers/apiController");


Router.post("/user", express.json(), apiController.checkUser);








module.exports = Router;