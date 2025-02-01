const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/error/app-error');
const { StatusCode } = require('http-status-codes')

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        if (error.name == 'TypeError'){
            throw new AppError('Cannot create a new airplane:', StatusCode.INTERNAL_SERVER_ERROR);
        } 
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.array.forEach((err) => {
                explanation.push_back(err.message);
            });
            throw new AppError(explanation, StatusCode.BAD_REQUEST);
        }
        throw error;
    }
}

module.exports = {
    createAirplane
}