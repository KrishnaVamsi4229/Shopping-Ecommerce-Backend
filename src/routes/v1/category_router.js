const express = require("express");
const router = express.Router();

const { createCategory }  = require("../../controllers/category_controller")

router.post("/", createCategory); // mapping a route to a controller

module.exports = router;