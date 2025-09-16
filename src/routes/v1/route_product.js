const express = require('express');
const { funcProduct } = require('../../controllers/func_product')
const router = express.Router();

router.get('/', funcProduct)
router.get('/about', funcProduct)

module.exports = router;