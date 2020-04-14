const express = require('express');
const GenerateDataController = require('./controllers/GenerateDataController');
const CryptographyController = require('./controllers/CryptographyController');
const SendChallengeController = require('./controllers/SendChallengeController');

const routes = express.Router();

routes.post('/generate', GenerateDataController.process);
routes.post('/encrypt', CryptographyController.process);
routes.post('/sendChallenge', SendChallengeController.process);

module.exports = routes;