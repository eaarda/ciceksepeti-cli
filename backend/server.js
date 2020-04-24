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
        const users = JSON.parse(data);
        var email = req.body.email;
        var pass = req.body.password;
        if (!email || !pass) {
            console.log('!!!!');
            return res.status(500).json({
                title: 'server error',
                error: 'user wrong'
            })
        }
        const userAccount = {
            password: pass,
            email: email
        };

        var user = users.filter(function(user) {
            if (user.email == email) {
                return user;
            }
        });

        if (!user) {
            console.log("!!!!")
            return status(500).json({
                title: 'server error',
                error: 'user wrong'
            })
        };

        if (user[0].password != pass) {
            console.log("Wrong password");
            return false;
        } else {
            const token = jwt.sign(userAccount);
            console.log(token);
            return res.status(200).json({
                title: 'Login',
                token: token
            });
        }
    });
});

app.listen(process.env.PORT || 5000, () => {
    console.log('listening on 5000')
})