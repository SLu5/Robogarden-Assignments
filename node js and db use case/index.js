const express = require('express');
const app = express();
const config = require('./config');
const Student = require('./models/student');
app.use(express.urlencoded({ extended: false }));

const requestTotals = {
    'GET': 0,
    'POST': 0,
    'PATCH': 0,
    'DELETE': 0
};

app.use((req, _res, next) => {
    requestTotals[req.method] = (requestTotals[req.method] ?? 0) + 1;
    console.log(`Method: ${req.method}`);
    
    let totalRequests = 0;
    let summary = '';
    for (const method in requestTotals) {
        totalRequests += requestTotals[method];
        summary += ` ${method}: ${requestTotals[method]}`;
    }
    console.log(`Total Requests: ${totalRequests} ${summary}`);
    
    next()
})

config.authenticate()
    .then(function () {
        console.log('Database is connected');
    })
    .catch(function (err) {
        console.log(err);
    });

app.get('/students', async function (req, res) {

    try {
        const results = await Student.findAll();
        res.send(results);
    } catch (err) {
        res.status(500).send(err);
    }

});

app.get('/students/:student_id', async function (req, res) {
    
    try {
        let student_id = parseInt(req.params.student_id);
        const result = await Student.findByPk(student_id);
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/students/section/:section', async function (req, res) {

    try {
        let section = req.params.section;
        const result = await Student.findAll({ where: { section: `${section}` } });
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.patch('/students/:student_id', async function (req, res) {
    try {
        let student_id = parseInt(req.params.student_id);
        const result = await Student.findByPk(student_id);
        if (result) {
            result.name = req.body.name;
            result.section = req.body.section;
            result.gpa = parseFloat(req.body.gpa);
            result.nationality = req.body.nationality;
            const saveResult = await result.save();
            res.status(300).send(saveResult);
        } else {
            res.status(404).send('Student record was not found');
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/students/:student_id', async function (req, res) {
    try {
        let student_id = parseInt(req.params.student_id);
        const result = await Student.findByPk(student_id);
        if (result) {
            result.destroy();
            res.status(200).send(result);
        } else {
            res.status(404).send('Student record was not found');
        }
    } catch (err) {
        res.status(500).send(err);
    }
});
app.post('/students', async function (req, res) {
    try {
        const result = await Student.create(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(3000, function () {
    console.log('server is running on port 3000...');
});