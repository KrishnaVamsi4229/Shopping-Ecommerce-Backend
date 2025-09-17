class BadRequest extends Error{
    constructor(propertyMissing){
        super(propertyMissing);
        this.statusCode = 400;
        this.errorMessage = `${propertyMissing} is missing from the request body`;
    }
}

module.exports = BadRequest;