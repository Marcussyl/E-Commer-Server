const express = require('express');
const connection = require('../mysql-server');
const router = express.Router();

// POST /cart endpoint handler
router.post('/cart', (req, res) => {
    const userId = req.body.userId;
    const created_at = new Date(req.body.created);
    const updated_at = new Date(req.body.updated);
    const query = `INSERT INTO cart (user_id, created_at, updated_at) VALUES ${userId}, ${created_at}, ${updated_at}`;

    connection.query(query, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// POST /cart/:cardId endpoint handler
router.post('/cart/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    const productId = req.body.productId;
    const quantity = req.body.quantity;
    const query = `INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (${cardId}, ${productId}, ${quantity})`;

    connection.query(query, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

module.exports = router;