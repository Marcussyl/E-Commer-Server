const express = require('express');
const connection = require('../mysql-server');
const router = express.Router();

//The cart should keep track of products a user wants to purchase. Think about how you will associate products with your cart instance and keep track of them when it comes time to place an order. 
router.post('/cart/:cartId/checkout', (req, res) => {
    const cartId = req.params.cartId;
    const query = `SELECT * FROM cart_items WHERE cart_id = ${cartId}`;

    connection.query(query, (err, cartItems) => {
        if (err) throw err;
        res.json(cartItems);
    });
});

module.exports = router;