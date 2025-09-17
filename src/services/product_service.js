// In memory db

const products = [];

function createProductService(product){
    const newProduct = {
        id : products.length,
        ...product
    }
    products.push(newProduct);
    return newProduct;

}

function getProductId(id){
    return products.filter(product => product.id == id)[0];
}

function getProductService(){
    return products;
}

module.exports = {
    createProductService,
    getProductService,
    getProductId,
}