// In memory db

const products = [];

class ProductService{
    constructor(repository){
        this.repository = repository;
    }
    createProductService(product){
        const newProduct = {
            id : products.length,
            ...product
        }
        products.push(newProduct);
        return newProduct;

    }

    getProductId(id){
        return products.filter(product => product.id == id)[0];
    }

    // function getProductService(){
    //     return products;
    // }

    async getProductService(){
        const response = await this.repository.getProducts();
        return response;
    }
}


module.exports = ProductService;