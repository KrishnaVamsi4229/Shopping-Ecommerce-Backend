const express = require("express");
const router = express.Router();

const { createCategory , getCategory , getAllCategories , destroyCategory }  = require("../../controllers/category_controller")

router.post("/", createCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategory);
router.delete("/delete/:id" , destroyCategory); // mapping a route to a controller
// localhost:3001/api/v1/category/delete/5


module.exports = router;