const { StatusCodes , ReasonPhrases } = require("http-status-codes");
const { createProductService , getProductId } = require("../services/product_service");
const FakeStoreRepository = require("../repositories/fake_store_repository");
const ProductService = require("../services/product_service");

const productService = new ProductService(new FakeStoreRepository());

function createProduct(request,response){
    try {
        // some db processing

        const res = createProductService(request.body);

        return response.status(StatusCodes.CREATED).json({
            success : true,
            error : {},
            message : ReasonPhrases.CREATED + " Product",
            data : res,

        })
        
    } catch (error) {
        console.log("something went wrong ",error);
        
    }
}

async function getProduct(request,response){
    try {
        // some db processing

        const res = await productService.getProductService(request.body);

        return response.status(StatusCodes.OK).json({
            success : true,
            error : {},
            message : "Successfully fecthed the Product",
            data : res,

        })
        
    } catch (error) {
        console.log("something went wrong ",error);
        
    }
}

function getProductName(req,res){ //   /api/v1/products/2
    try {
        // some db processing

        const response = getProductId(req.params.id);

        return res.status(StatusCodes.OK).json({
            success : true,
            error : {},
            message : "Successfully fecthed the Product",
            data : response,

        })
        
    } catch (error) {
        console.log("something went wrong ",error);
        
    }

}

module.exports = {
    createProduct,
    getProduct,
    getProductName,
}