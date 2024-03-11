var passport = require('passport');

// The LocalStrategy constructor takes a verify function as an argument, which accepts username and password as arguments
// When authenticating a request, the strategy parses a username and password, which are submitted via an HTML form to the web application. The strategy then calls the verify function with those credentials.
var LocalStrategy = require('passport-local');
var crypto = require('crypto');
const connect = require('./mysql-server');
const connection = require('./mysql-server');

passport.use(new LocalStrategy(function verify(email, password, cb) {
    const query = `SELECT * FROM users WHERE email = ${email} and password = ${password}`;

    connection.query(query, (err, result) => {
        if (err) { return cb(err); }
        if (!result) { return cb(null, false, { message: 'Incorrect username or password.' }); }
        return cb(null, result);
    });
}));