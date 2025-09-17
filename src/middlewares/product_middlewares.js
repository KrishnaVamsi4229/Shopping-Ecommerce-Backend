const errorResponse = require("../utils/error_response");
const { StatusCodes , ReasonPhrases } = require("http-status-codes");
const BadRequest = require("../errors/bad_request_error");

function createProductMiddleware(request,response,next){
    const { title , price , description , image , category } = request.body;
    if(!title){
        //const err = new BadRequest("title");
        //console.log(err.stack) // This happens because of extends Error
        return response
        .status(StatusCodes.BAD_REQUEST)
        .json(errorResponse(ReasonPhrases.BAD_REQUEST, /*err*/ new BadRequest("Title")));
    }
    if(!price){
        return response
        .status(StatusCodes.BAD_REQUEST)
        .json(errorResponse(ReasonPhrases.BAD_REQUEST, /*err*/ new BadRequest("Price")));
    }
    if(!description){
        return response
        .status(StatusCodes.BAD_REQUEST)
        .json(errorResponse(ReasonPhrases.BAD_REQUEST, /*err*/ new BadRequest("Description")));
    }
    if(!image){
        return response
        .status(StatusCodes.BAD_REQUEST)
        .json(errorResponse(ReasonPhrases.BAD_REQUEST, /*err*/ new BadRequest("Image")));
    }
    if(!category){
        return response
        .status(StatusCodes.BAD_REQUEST)
        .json(errorResponse(ReasonPhrases.BAD_REQUEST, /*err*/ new BadRequest("Category")));
    }
    // If everything looks good we will call next middleware
    next();
}

module.exports = {
    createProductMiddleware,
}