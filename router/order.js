const express = require('express');
const connection = require('../mysql-server');
const router = express.Router();

//GET /orders endpoint handler
router.get('/orders', (req, res) => {
    const query = "SELECT * FROM orders";

    connection.query(query, (err, orders) => {
        if (err) throw err;
        res.json(orders);
    });
});

//GET /orders/:orderId endpoint handler
router.get('/orders/:orderId', (req, res) => {
    const orderId = req.params.orderId;
    const query = `SELECT * FROM orders WHERE order_id = ${orderId}`;

    connection.query(query, (err, order) => {
        if (err) throw err;
        res.json(order);
    });
});

module.exports = router;