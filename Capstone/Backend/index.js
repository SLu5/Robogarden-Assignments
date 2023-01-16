const express = require('express');
const app = express();
const config = require('./config');
const Item = require('./models/item');
const cors = require('cors');
app.use(express.urlencoded({ extended: false }));
app.use(cors()); //This will solve the cors policy block.

config.authenticate().then(function () {
    console.log('Database is conncected.');
}).catch(function (err) {
    console.log(err);
});

app.get('/item', async function (req, res) {

    try {
        const results = await Item.findAll();
        res.status(200).send(results);
    } catch (err) {
        res.status(500).send(err);
    }

});

app.get('/item/:item_id', async function (req, res) {

    try {
        let item_id = parseInt(req.params.item_id);
        const result = await Item.findByPk(item_id);
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }

});

app.patch('/item/:item_id', async function (req, res) {

    try {
        let item_id = parseInt(req.params.item_id);
        const result = await Item.findByPk(item_id);
        if (result) {
            result.name = req.body.name;
            result.SKU = req.body.SKU;
            result.quantity = req.body.quantity;
            result.quantity_type = req.body.quantity_type;
            result.price = req.body.price;
            result.intended_sale_price = req.body.intended_sale_price;
            const saveResult = await result.save();
            res.status(300).send(saveResult);
            res.status(300).send('success?');
        } else {
            res, status(404).send('Item record was not found');
        }
    } catch (err) {
        res.status(500).send(err);
    }

});

app.delete('/item/:item_id', async function (req, res) {
    try {
        let item_id = parseInt(req.params.item_id);
        const result = await item.findByPk(item_id);
        if (result) {
            result.destroy();
            res.status(200).send(result);
        } else {
            res.status(404).send('Item record was not found');
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/item', async function (req, res) {
    try {
        console.log(JSON.stringify(req.body));
        const result = await Item.create(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});


app.listen(3000, function () {
    console.log('server running on port 3000...');

});