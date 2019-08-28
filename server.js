const express = require('express');

const server = express();

server.use(express.json());

const CarsApi = require('./router/cars.js');

server.use('/api/cars', CarsApi);

server.get('/', (req, res) => {
  res.send('Check out /api/cars/ !');
});

module.exports = server;