const express = require("express");
const router = express.Router();
const products = require("./product_router");
const category = require("./category_router");

router.use('/products', products);
router.use('/category',category);

module.exports = router;