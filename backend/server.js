const express = require('express');
const app = express();
var cors = require('cors')
const bodyParser = require('body-parser');
var path = require('path');
const fs = require('fs');
const jwt = require("jsonwebtoken");

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));
app.use(bodyParser.json());

const logindata = path.join(__dirname, './data/logindata.json');

app.get('/login', (req, res) => {
    fs.readFile(logindata, (err, data) => {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(JSON.parse(data));
    });
});

app.post('/login', (req, res) => {
    fs.readFile(logindata, (err, data) => {
        var userdata = JSON.parse(data)
        console.log(userdata)
        userdata.forEach(element => {
            if (element.email == req.body.email & element.password == req.body.password) {
                res.status(200).send("OK")
                return;
            }
        });
        res.send("ERROR")
    });

})
app.listen(process.env.PORT || 5000, () => {
    console.log('listening on 5000')
})