const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (e) => {
    console.log(`There was an error connecting the DB: ${e}`);
});

module.exports = mongoose;