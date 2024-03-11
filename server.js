const express = require('express');
const app = express();
const usersRoutes = require('./router/user');
const productsRoutes = require('./router/product');
const cartRoutes = require('./router/cart');
const checkoutRoutes = require('./router/checkout');
const orderRoutes = require('./router/order');
const connection = require('./mysql-server');
const passport = require('./passport-local');

app.get('/', (req, res) => {
    res.send('Welcome to the e-commerce website');
})
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
app.use('/cart', cartRoutes);
app.use('/checkout', checkoutRoutes);
app.use('/order', orderRoutes);
app.post('/register', (req, res) => {
    const userId = req.params.userId;
    const email = req.params.email;
    const password = req.params.password;
    const first_name = req.params.first_name;
    const last_name = req.params.last_name;
    const address = req.params.address;
    const phone_number = req.params.phone_number;

    const query = `INSERT INTO users (user_id, email, password, first_name, last_name, address, phone_number) VALUES (${userId}, ${email}, ${password}, ${first_name}, ${last_name}, ${address}, ${phone_number})`;

    connection.query(query, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/' }),
    function(req, res) {
        res.redirect('/');
    }
);

app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});