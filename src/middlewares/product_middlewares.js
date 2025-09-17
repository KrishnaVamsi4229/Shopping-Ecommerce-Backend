const errorResponse = require("../utils/error_response")
const BadRequest = require("../errors/bad_request_error")

function createProductMiddleware(request,response,next){
    const { title , price , description , image , category } = request.body;
    if(!title){
        //const err = new BadRequest("title");
        //console.log(err.stack) // This happens because of extends Error
        return response.status(400).json(errorResponse("Title not present in the incoming request", /*err*/ new BadRequest("Title")));
    }
    if(!price){
        return response.status(400).json(errorResponse("Price not present in the incoming request", /*err*/ new BadRequest("Price")));
    }
    if(!description){
        return response.status(400).json(errorResponse("Description not present in the incoming request", /*err*/ new BadRequest("Description")));
    }
    if(!image){
        return response.status(400).json(errorResponse("Image not present in the incoming request", /*err*/ new BadRequest("Image")));
    }
    if(!category){
        return response.status(400).json(errorResponse("Category not present in the incoming request", /*err*/ new BadRequest("Category")));
    }
    // If everything looks good we will call next middleware
    next();
}

module.exports = {
    createProductMiddleware,
}