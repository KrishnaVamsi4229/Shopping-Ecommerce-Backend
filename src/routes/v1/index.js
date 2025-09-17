const express = require("express");
const router = express.Router();
const products = require("./product_router")

router.use('/products', products);

module.exports = router;