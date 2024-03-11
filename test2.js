const casual = require('casual');
const connection = require('./mysql-server');

// Generate 5 rows of random data
// for (let i = 0; i < 5; i++) {
//     const name = casual.word;
//     const description = casual.sentence;
//     const price = casual.integer(100, 1000);
//     const stock = casual.integer(10, 100);
//     const imageUrl = `https://example.com/${casual.word}.jpg`;
//     const categoryId = casual.integer(1, 5);

//     const sql = `INSERT INTO products (name, description, price, stock, image_url, category_id) VALUES ('${name}', '${description}', ${price}, ${stock}, '${imageUrl}', ${categoryId})`;

//     connection.query(sql, function(err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//     });
// }

// Generate 5 rows of random data
// for (let i = 0; i < 5; i++) {
//     const userId = casual.integer(1, 10);
//     const createdAt = casual.date('YYYY-MM-DD HH:mm:ss');
//     const status = casual.random_element(['pending', 'processing', 'shipped', 'delivered', 'cancelled']);
//     const totalPrice = casual.double(10, 2);
//     const shippingAddress = casual.address;

//     const sql = `INSERT INTO orders (user_id, created_at, status, total_price, shipping_address) VALUES (${userId}, '${createdAt}', '${status}', ${totalPrice}, '${shippingAddress}')`;

//     connection.query(sql, function(err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//     });
// }

// Generate 5 rows of random data
// for (let i = 0; i < 5; i++) {
//     const userId = casual.integer(1, 10);
//     const createdAt = casual.date('YYYY-MM-DD HH:mm:ss');
//     const updatedAt = casual.date('YYYY-MM-DD HH:mm:ss');

//     const sql = `INSERT INTO cart (user_id, created_at, updated_at) VALUES (${userId}, '${createdAt}', '${updatedAt}')`;

//     connection.query(sql, function(err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//     });
// }

// Generate 5 rows of random data
// for (let i = 0; i < 5; i++) {
//     const email = casual.email;
//     const password = casual.password;
//     const firstName = casual.first_name;
//     const lastName = casual.last_name;
//     const address = casual.address;
//     const phoneNumber = casual.phone;

//     const sql = `INSERT INTO users (email, password, first_name, last_name, address, phone_number) VALUES ('${email}', '${password}', '${firstName}', '${lastName}', '${address}', '${phoneNumber}')`;

//     connection.query(sql, function(err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//     });
// }

// Generate 5 rows of random data
for (let i = 0; i < 5; i++) {
    const cartId = casual.integer(2, 11);
    const productId = casual.integer(1, 11);
    const quantity = casual.integer(1, 10);

    const sql = `INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (${cartId}, ${productId}, ${quantity})`;

    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
}

connection.end();