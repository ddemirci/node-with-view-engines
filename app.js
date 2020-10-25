const rootPath = require('./utils/rootPath');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const shopData = require('./routes/shop');
const adminData = require('./routes/admin');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootPath,'public'))); //to be able to use files in public folders

//Setting routes
app.use('/shop', shopData.router);
app.use('/admin', adminData);

app.get('/', (req,res) => {
    res.send('<h1> Main </h1>');
});

app.use( (req,res) => {
    res.status(404); //Not Found Page
    res.send('<h1> Not Found </h1>');
})

app.listen(3000);