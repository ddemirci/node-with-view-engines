const express = require('express');

const router = express.Router();

const products = [];

router.get('/add-product', (req,res) => {
    res.render('add-product',{
        pageTitle : 'Add Product',
        path: 'admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
})

router.post('/add-product', (req,res) => {
    var product = {
        'prodName': req.body.name,
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