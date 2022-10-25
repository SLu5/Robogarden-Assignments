const express = require('express');
const app = express();
const arithmeticFunctions = require('./arithmeticFunctions');
app.use(express.urlencoded({ extended: false }));


app.get('/', function (req, res) {
    console.log(req.query);
    res.send(arithmeticFunctions.message());

});

app.post('/', function (req, res) {
    const value1 = parseFloat(req.body.value_1);
    const value2 = parseFloat(req.body.value_2);

    let result = 0;
    switch (req.body.operation) {
        case 'add':
            result = arithmeticFunctions.add(value1, value2);
            break;
        case 'sub':
            result = arithmeticFunctions.sub(value1, value2);
            break;
        case 'mul':
            result = arithmeticFunctions.mul(value1, value2);
            break;
        case 'div':
            result = arithmeticFunctions.div(value1, value2);
            break;
        default:
            res.send('Not a valid operation, the valid operations are: add, sub, mul, div.');
            break;
    }


    const responseText = `operation: ${req.body.operation}
Value 1: ${value1}
Value 2: ${value2}
Result: ${result}`;
    res.send(responseText);
    console.log(responseText);
});
        



app.listen(3000, function () {
    console.log('server running on port 3000...');
});