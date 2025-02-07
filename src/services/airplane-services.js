const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/error/app-error');
const { StatusCodes } = require('http-status-codes');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        if (error.name == 'TypeError'){
            throw new AppError('Cannot create a new airplane:', StatusCodes.INTERNAL_SERVER_ERROR);
        } 
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.array.forEach((err) => {
                explanation.push_back(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new city object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('Cannot fetch data of all airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id) {
    try {
        const airplanes = await airplaneRepository.get(id);
        return airplanes;
    } catch (error) {
        if(error.statusCodes == StatusCodes.NOT_FOUND) {
            throw new AppError('The Airplane u have requested is not present now', error.statusCodes);
        }
        throw new AppError('Cannot fetch data of all airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirplane(id) {
    try {
        const airplanes = await airplaneRepository.destroy(id);
        return airplanes;
    } catch (error) {
        if(error.statusCodes == StatusCodes.NOT_FOUND) {
            throw new AppError('The Airplane u have requested to delete is not present now', error.statusCodes);
        }
        throw new AppError('Cannot fetch data of all airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}