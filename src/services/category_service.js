class CategoryService{
    constructor(repository){
        this.repository = repository;
    }

    async createCategory({name,description}){
        const response = await this.repository.createCategory(name,description);
        return response;
    }
}

module.exports = CategoryService;