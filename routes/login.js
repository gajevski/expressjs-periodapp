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
        username: 'user1',
        password: '$2b$10$ejCQuVd4lC8qG0jjDmB2hu/TU9Kzch5XnFEaM2TGcQRy4bH3l.GAa', // Hashed password: 'password'
    },
];

router.post('/', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    const result = bcrypt.compare(password, user.password);

    if (user && result) {
        req.session.user = user;
        res.send('Correct!');
    } else {
        res.send('Invalid username or password');
    }
});

module.exports = router;
