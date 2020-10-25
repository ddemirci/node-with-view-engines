const express = require('express');
const router = express.Router();
const adminData = require('./admin');

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