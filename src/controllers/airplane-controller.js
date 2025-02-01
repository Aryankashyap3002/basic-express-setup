const { StatusCodes } = require('http-status-codes');

const { AirplaneService } = require('../services');

async function createAirplane(req, res) {
    try {
        console.log("Request Body:", req.body.modelNumber) ;
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        });
        console.log("Created Airplane:", airplane); 
        
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Succesfully created a airplane",
            data: airplane,
            error: {},
        });
    } catch (error) {
        ErrorResponse.response = error;
        return res.status(error.statusCodes).json(ErrorResponse)
    }
}

module.exports = {
    createAirplane
}