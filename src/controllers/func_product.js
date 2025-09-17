function funcProduct(request,response){
    //console.log("controller executed");
    return response.json({products : []});
}
function funcProduct2(request,response){
    return response.json({message : "ok from v2 API"});
}

module.exports = {
    funcProduct,
    funcProduct2,
}