function createProduct(request,response){
    try {
        // some db processing

        return response.json({
            success : true,
            error : {},
            message : 'successfully created the product',
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