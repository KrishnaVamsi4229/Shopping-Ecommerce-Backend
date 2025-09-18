const { StatusCodes , ReasonPhrases } = require("http-status-codes");

const CategoryService = require("../services/category_service");
const CategoryRepository =  require("../repositories/category_repository");

const categoryService = new CategoryService(new CategoryRepository());

async function getCategory(request,response){
    try {
        // some db processing

        const res = await categoryService.getCategory(request.params.id);

        return response.status(StatusCodes.CREATED).json({
            data : res,

        })
        
    } catch (error) {
        console.log("something went wrong ",error);
        
    }
}

async function getAllCategories(request,response){
    try {
        // some db processing

        const res = await categoryService.getAllCategories();

        return response.status(StatusCodes.CREATED).json({
            data : res,

        })
        
    } catch (error) {
        console.log("something went wrong ",error);
        
    }
}


async function createCategory(request,response){
    try {
        // some db processing

        const res = await categoryService.createCategory(request.body);

        return response.status(StatusCodes.CREATED).json({
            success : true,
            error : {},
            message : ReasonPhrases.CREATED + " Category",
            data : res,

        })
        
    } catch (error) {
        console.log("something went wrong ",error);
        
    }
}

async function destroyCategory(request,response){
    try {
        // some db processing

        const res = await categoryService.destroyCategory(request.params.id);

        return response.status(StatusCodes.OK).json({
            data : res,

        })
        
    } catch (error) {
        console.log("something went wrong ",error);
        
    }
}

module.exports = {
    createCategory,
    getCategory,
    getAllCategories,
    destroyCategory,
}