const express = require('express');
const app = express();
const config = require('./config');
const Item = require('./models/item');
const cors = require('cors');
const Sale = require('./models/sale');
const { aggregate } = require('./models/item');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
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

app.get('/summary', async (req, res) =>{
    console.log('hello');
    try {

        const results = await Item.findAll();
        const sum = results.reduce((agg, item) => agg + item.quantity * item.price, 0);
        //const results = await Item.findOne({
        //    attributes: [sequelize.fn("SUM", sequelize.col("price"))],
        //    raw: true

        //});
        console.log(sum);
        res.status(200).send(String(sum));
    }
    catch (err) {
        res.status(500).send(err);
        console.log("sdfsdfjkjl")
    }
});

app.get('/summary/salePrice', async (req, res) => {
    try {
        const results = await Item.findAll();
        const sum = results.reduce((agg, item) => agg + item.quantity * item.intended_sale_price, 0);

        //const count = await Item.findOne({
        //    attributes: [sequelize.fn("count", sequelize.col("item_id"))],
        //    raw: true
        //});
        res.status(200).send(String(sum));
    } catch (err) {
        res.status(500).send(err);
    }
})

app.get('/summary/sale30', async function (req, res) {

    try {
        const results = await Sale.findAll();
        const d = new Date();
        let now = d.getTime();

        // 2592000000 miliseconds to go back 30 days

        const thirtyDaysAgo = now - 2592000000;
        console.log('asdjkhsdgk');
        let thirtydays = results.filter(sale => new Date(sale.date).getTime() >= thirtyDaysAgo);
 console.log(thirtydays);
        const sum = thirtydays.reduce((agg, sale) => agg + sale.quantity_sold*sale.sell_price_per_unit, 0);
        //console.log('asdasd');
        console.log(sum);
        ///*const dates = results.filter(thirtyDays);*/

        ////function thirtyDays(results) {
        ////    return results >= thirtyDaysAgo;
        ////}
        //let test = results.filter(sale => new Date(sale.date).getTime() <= thirtyDaysAgo);
        //console.log(test)
        res.status(200).send(String(sum));

    } catch (err) {
        res.status(500).send(err);
    }
})

app.get('/summary/item30', async function (req, res) {

    try {
        const results = await Sale.findAll();
        const d = new Date();
        let now = d.getTime();

        // 2592000000 miliseconds to go back 30 days

        const thirtyDaysAgo = now - 2592000000;
        console.log('asdjkhsdgk');
        let thirtydays = results.filter(sale => new Date(sale.date).getTime() >= thirtyDaysAgo);
        console.log(thirtydays);
        const sum = thirtydays.reduce((agg, sale) => agg + Number(sale.value_of_goods), 0);
       
        console.log(sum);
       
        res.status(200).send(String(sum));

    } catch (err) {
        res.status(500).send(err);
    }
})


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
            res.status(200).send(saveResult);
            /*res.status(300).send('success?');*/
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

app.get('/sale', async function (req, res) {

    try {
        const results = await Sale.findAll();
        res.status(200).send(results);
    } catch (err) {
        res.status(500).send(err);
    }

});

app.get('/sale/:sale_id', async function (req, res) {

    try {
        let sale_id = parseInt(req.params.sale_id);
        const result = await Sale.findByPk(sale_id);
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }

});


app.get('/history', async function (req, res) {


    try {
        let date = req.query.date;
        const results = await Sale.findAll({ where: { date: date } });
        
        res.status(200).send(results);

        /*Model.findAll({ where: { date: req.params.date } }).then(rows => { res.status(200).json(rows).send(); })*/
    } catch (err) {
        res.status(500).send(err);
    }


});

app.get('/inventory/filter', async function (req, res) {
    try {
        let name = req.query.name;
        const results = await Item.findAll({ where: { name: name } });
        res.status(200).send(results);
    } catch (err) {
        res.status(500).send(err);
    }
});

//app.get('/sale'), async function (req, res) {
//    try {
//        new Date(string) 

       
        
//    }
//}

app.patch('/sale/:sale_id', async function (req, res) {

    try {
        let sale_id = parseInt(req.params.sale_id);
        const result = await Sale.findByPk(sale_id);
        if (result) {
            result.item_id = req.body.item_id;
            result.total_sell_price = req.body.total_sell_price;
            result.quantity_sold = req.body.quantity_sold;
            result.date = req.body.date;
            const saveResult = await result.save();
            res.status(200).send(saveResult);
            res.status(200).send('success?');
        } else {
            res, status(404).send('Item record was not found');
        }
    } catch (err) {
        res.status(500).send(err);
    }

});

app.delete('/sale/:sale_id', async function (req, res) {
    try {
        let sale_id = parseInt(req.params.item_id);
        const result = await Sale.findByPk(sale_id);
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

app.post('/sale', async function (req, res) {
    try {
        console.log(JSON.stringify(req.body));
        const result = await Sale.create(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});



app.listen(3000, function () {
    console.log('server running on port 3000...');

});