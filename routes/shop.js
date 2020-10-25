const express = require('express');
const adminData = require('./admin');
const router = express.Router();

router.get('/', (req,res) => {
    const products = adminData.products
    res.render('shop', {
        products:products,
        pageTitle: 'Shop',
        path: '/shop',
        hasProduct: products.length > 0,
        productCSS: true,
        activeShop: true 
    });
});

module.exports = {
    router: router
}