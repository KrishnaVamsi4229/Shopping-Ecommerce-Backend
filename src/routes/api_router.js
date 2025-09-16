const express = require('express');
const v1Router = require('./v1/route_product');
const v2Router = require('./v2/route_productV2');
const router = express.Router();

router.use('/v1', v1Router )
router.use('/v2', v2Router )

module.exports = router;