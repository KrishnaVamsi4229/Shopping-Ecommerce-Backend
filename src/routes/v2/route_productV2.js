const express = require('express');
const { funcProduct2 } = require('../../controllers/func_product')
const router = express.Router();

router.get('/', funcProduct2)
router.get('/about', funcProduct2)

module.exports = router;