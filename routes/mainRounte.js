const express = require("express");
const Router = express.Router();
const mainController = require("../controllers/mainController");



Router.get("/", mainController.renderForm);
Router.get("/encoded",mainController.renderFormUrlencoded);




module.exports = Router;