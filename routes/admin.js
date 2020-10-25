const express = require('express');

const router = express.Router();

router.post('/add-product', (req,res) => {
    res.send('<h1> Admin add-product </h1>');
})


module.exports = router;