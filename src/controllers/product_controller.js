const { StatusCodes , ReasonPhrases } = require("http-status-codes");

function createProduct(request,response){
    try {
        // some db processing

        return response.status(StatusCodes.CREATED).json({
            success : true,
            error : {},
            message : ReasonPhrases.CREATED + " Product",
            data : {
                id : Math.random * (20) ,
                title : request.body.title,
                description : request.body.description,
                category : request.body.category,
                price : request.body.price,
                image : request.body.image,
            }

        })
        
    } catch (error) {
        console.log("something went wrong ",error);
        
    }
}

module.exports = {
    createProduct,
}