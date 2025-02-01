const { Logger } = require('../config')

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
        try{
            const response = await this.model.findByPk(data);
            return response;
        } catch(error) {
            Logger.error('Something went wrong in the Crud repo : get');
            throw error;
        }
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