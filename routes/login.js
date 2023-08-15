const express = require("express");
const router = express.Router();
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(
    session({
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: true,
    })
);

const users = [
    {
        id: 1,
        email: 'user@user.com',
        password: 'password', // Hashed password: 'password'
    },
];

router.post('/', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);

    if (user) {
        const result = password === user.password;

        if (result) {
            req.session.user = user;
            res.status(200).send('Correct!');
        } else {
            res.status(401).send('Invalid email or password');
        }
    } else {
        res.status(401).send('Invalid email or password');
    }
});

module.exports = router;
