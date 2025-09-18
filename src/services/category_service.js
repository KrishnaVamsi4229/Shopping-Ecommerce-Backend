class CategoryService{
    constructor(repository){
        this.repository = repository;
    }

    async  getAllCategories(){
        const response = await this.repository.getAllCategories();
        return response;
    }

    async  getCategory(id){
        const response = await this.repository.getCategory(id);
        return response;
    }


    async createCategory({name,description}){
        const response = await this.repository.createCategory(name,description);
        return response;
    }
}

module.exports = CategoryService;