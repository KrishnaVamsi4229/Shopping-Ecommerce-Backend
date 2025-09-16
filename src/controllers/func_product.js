function funcProduct(request,response){
    return response.json({message : "ok from v1 API"});
}
function funcProduct2(request,response){
    return response.json({message : "ok from v2 API"});
}

module.exports = {
    funcProduct,
    funcProduct2,
}