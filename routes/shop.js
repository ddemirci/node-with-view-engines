const express = require('express');
const adminData = require('./admin');
const router = express.Router();

router.get('/', (req,res) => {
    const products = adminData.products
    res.render('shop', {
        products:products,
        pageTitle: 'Shop',
        path: '/shop'
    });
});

module.exports = {
    router: router
}