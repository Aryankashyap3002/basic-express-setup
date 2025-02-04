const { AirportRepository } = require('../repositories');
const AppError = require('../utils/error/app-error');
const { StatusCodes } = require('http-status-codes');

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try {
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
        if (error.name == 'TypeError'){
            throw new AppError('Cannot create a new airport:', StatusCodes.INTERNAL_SERVER_ERROR);
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

async function getAirports() {
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError('Cannot fetch data of all airports', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id) {
    try {
        const airport = await airportRepository.get(id);
        return airport;
    } catch (error) {
        if(error.statusCodes == StatusCodes.NOT_FOUND) {
            throw new AppError('The airport u have requested is not present now', error.statusCodes);
        }
        throw new AppError('Cannot fetch data of all airports', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirport(id) {
    try {
        const airport = await airportRepository.destroy(id);
        return airport;
    } catch (error) {
        if(error.statusCodes == StatusCodes.NOT_FOUND) {
            throw new AppError('The airport u have requested to delete is not present now', error.statusCodes);
        }
        throw new AppError('Cannot fetch data of all airports', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirport,
    getAirport,
    getAirports,
    destroyAirport
}