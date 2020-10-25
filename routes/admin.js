const express = require('express');
const filePathBuilder = require('../utils/filePathBuilder');
const router = express.Router();


const products = [];

router.get('/add-product', (req,res) => {
    res.render('add-product',{
        pageTitle : 'Add Product',
        path: 'admin/add-product'
    });
})

router.post('/add-product', (req,res) => {
    var product = {
        'name': req.body.name,
        'price': req.body.price,
        'description': req.body.description
    };
    products.push(product);
    res.redirect('/shop');
})


module.exports = {
    router: router,
    products: products
}