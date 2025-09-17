const express = require('express');
const { funcProduct } = require('../../controllers/func_product')
const router = express.Router();

// function auth(request,response,next){
//     console.log("auth check");
//     next();
//     console.log("auth completed");
// }

// function log(request,response,next){
//     console.log("log check");
//     next();
//     console.log("log completed");
//}

router.get('/', /*[auth , log],*/funcProduct)
router.get('/about', funcProduct)

module.exports = router;