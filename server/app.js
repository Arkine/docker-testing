const Express = require('express');

const app = new Express();

app.get('/', (req, res) => {
    return res.send('Gotcha!');
});

const server = app.listen(3000, () => {
    console.log(`app listening on port ${server.address().port}`)
});

module.exports = server;