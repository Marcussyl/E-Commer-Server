const express = require('express');
const connection = require('../mysql-server');
const router = express.Router();

//E-commerce applications often have private user accounts that contain information specific to the logged in user. Users should be able to retrieve and modify this information via the API
router.get('/users', (req, res) => {
    const query = "SELECT * FROM users";

    connection.query(query, (err, users) => {
        if (err) throw err;
        res.json(users);
    });
})

router.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const query = `SELECT * FROM users WHERE user_id = ${userId}`;

    connection.query(query, (err, user) => {
        if (err) throw err;
        res.json(user);
    });
})

router.put('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const email = req.params.email;
    const first_name = req.params.first_name;
    const last_name = req.params.last_name;
    const address = req.params.address;
    const phone_number = req.params.phone_number;
    const query = `UPDATE users SET email = '${email}', first_name = '${first_name}', last_name = '${last_name}', address = '${address}', phone_number = '${phone_number}' WHERE user_id = ${userId}`;

    connection.query(query, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
})

module.exports = router;