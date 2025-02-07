const { Logger } = require('../config')
const { StatusCodes } = require('http-status-codes')
const AppError = require('../utils/error/app-error')

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try{
            const response = await this.model.create(data);
            console.log(model);
            return response;
        } catch(error) {
            Logger.error('Something went wrong in the Crud repo : create', error);
            throw error;
        }
    }

    async destroy(data) {
        
            const response = await this.model.destroy({
                where : {
                    id: data
                }
            });
            if(!response) {
                throw new AppError('Not able to find resource', StatusCodes.NOT_FOUND)
            }
            return response;
    }

    async get(data) {
        
            const response = await this.model.findByPk(data);
            if(!response) {
                throw new AppError('Not able to find resource', StatusCodes.NOT_FOUND)
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