const dotenv = require('dotenv');
dotenv.config({path: 'variables.env'});

// Database
require('./db');

// Server
require('./app');

