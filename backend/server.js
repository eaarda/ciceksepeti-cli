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

app.post('/login', async(req, res) => {
    fs.readFile(logindata, (err, data) => {
        const users = JSON.parse(data);
        console.log("Users: ", users);
        var email = req.body.email;
        var pass = req.body.password;

        res.send(req.body);

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

        var check = false;
        var user = users.filter(function(user) {

            console.log("User mail: ", user.email);
            if (user.email == email) {
                check = true;
                return user;
            }
        });

        console.log("user: ", user);
        console.log("check: ", check);

        if (check == false) {
            console.log("!!!!");

            //pop up.

        };

    });
});

app.listen(process.env.PORT || 5000, () => {
    console.log('listening on 5000')
})