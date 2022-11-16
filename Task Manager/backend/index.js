const express = require('express');
const app = express();
const config = require('./config');
const Task = require('./models/Task');
const cors = require('cors');

app.use(cors()); //This will solve the cors policy block.

config.authenticate().then(function () {
    console.log('Database is conncected.');
}).catch(function (err) {
    console.log(err);
});

app.get('/tasks', async function (req, res) {

    try {
        const results = await Task.findAll();
        res.status(200).send(results);
    } catch (err) {
        res.status(500).send(err);
    }

});

app.listen(3000, function () {
    console.log('server running on port 3000...');

});