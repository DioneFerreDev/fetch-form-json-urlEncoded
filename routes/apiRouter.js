const express = require("express");
const Router = express.Router();
const apiController = require("../controllers/apiController");


Router.post("/user", express.json(), apiController.checkUser);
Router.post("/user-encoded", express.urlencoded({ extended: true }), apiController.checkUserEncoded);








module.exports = Router;