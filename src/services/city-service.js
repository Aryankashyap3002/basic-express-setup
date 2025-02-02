const { CityRepository } = require('../repositories');
const AppError = require('../utils/error/app-error');
const { StatusCodes } = require('http-status-codes');

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        if (error.name == 'TypeError'){
            throw new AppError('Cannot create a new city :', StatusCodes.INTERNAL_SERVER_ERROR);
        } 
        if(error.name == 'SequelizeValidationError'|| error.name == 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.array.forEach((err) => {
                explanation.push_back(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new city object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createCity,
}