const express = require('express');
const { createProduct , getProduct , getProductName } = require('../../controllers/product_controller');
const { createProductMiddleware } = require("../../middlewares/product_middlewares");
const router = express.Router();

router.post("/", createProductMiddleware ,createProduct);
router.get("/", getProduct);
router.get("/:id",getProductName);

module.exports = router;