const express = require('express');
const connection = require('../mysql-server');
const router = express.Router();

// GET /products?category={categoryId} endpoint handler
router.get('/products/:productId', (req, res) => {
    const productId = req.query.productId;
    // Retrieve products based on the productId
    const query = `SELECT * FROM products WHERE product_id = ${productId}`;

    connection.get(query, (err, products) => {
        if (err) throw err;
        res.json(products);
    });
});

// GET /products/{categoryId} endpoint handler
router.get('/products/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;

    // Retrieve product based on the categoryId
    const query = `SELECT * FROM products WHERE category_id = ${categoryId}`;

    connection.get(query, (err, products) => {
        if (err) throw err;
        res.json(products);
    });
});

module.exports = router;