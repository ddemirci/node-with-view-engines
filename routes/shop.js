const express = require('express');
const router = express.Router();

const products = [];

router.get('/', (req,res) => {
    res.send('<h1> Shop </h1>');
});

module.exports = {
    router: router,    
    products: products
}