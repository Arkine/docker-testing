const Express = require('express');

const app = new Express();

app.get('/', (req, res) => {
    return res.send('Gotcha!');
});

const server = app.listen(process.env.PORT, () => {
    console.log(`app listening on port ${server.address().port}`)
});

module.exports = server;