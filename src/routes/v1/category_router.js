const express = require("express");
const router = express.Router();

const { createCategory , getCategory , getAllCategories }  = require("../../controllers/category_controller")

router.post("/", createCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategory); // mapping a route to a controller

module.exports = router;