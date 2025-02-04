const express = require('express');

const  {serverConfig, Logger}  = require('./config');

const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(serverConfig.PORT, async () => {
    console.log('Successfully started the server port:', serverConfig.PORT);
    const { Airport, City } = require('./models');
    const city = await City.findByPk(1);
    const esponse =  await city.createAirport({name: 'Kempegowda', code: 'BLR'});
})