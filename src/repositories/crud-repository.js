const { Logger } = require('../config')
const { StatusCodes } = require('http-status-codes')

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try{
            const response = await this.model.create(data);
            return response;
        } catch(error) {
            Logger.error('Something went wrong in the Crud repo : create', error);
            throw error;
        }
    }

    async destroy(data) {
        try{
            const response = await this.model.destroy({
                where : {
                    id: data
                }
            });
            return response;
        } catch(error) {
            Logger.error('Something went wrong in the Crud repo : destroy');
            throw error;
        }
    }

    async get(data) {
        
            const response = await this.model.findByPk(data);
            if(!response) {
                throw new Error('Not able to find resource', StatusCodes.NOT_FOUND)
            }
            return response;
        
    }

    async getAll() {
        const response = await this.model.findAll();
        return response;
    }

    async update(data) {
        try{
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        } catch(error) {
            Logger.error('Something went wrong in the Crud repo : update');
            throw error;
        }
    }
}

module.exports = CrudRepository;