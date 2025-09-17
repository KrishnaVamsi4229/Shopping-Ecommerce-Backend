const express = require('express');
const { createProduct } = require('../../controllers/product_controller');
const { createProductMiddleware } = require("../../middlewares/product_middlewares");
const router = express.Router();

router.post("/", createProductMiddleware ,createProduct);

module.exports = router;