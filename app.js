const rootPath = require('./utils/rootPath');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const shopData = require('./routes/shop');
const adminData = require('./routes/admin');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootPath,'public'))); //to be able to use files in public folders

app.set('view engine', 'pug');
app.set('views', 'views'); //Normally it is not needed because default is "views"

//Setting routes
app.use('/shop', shopData.router);
app.use('/admin', adminData.router);

app.get('/', (req,res) => {
    res.render('main', {pageTitle: 'Main Page'});
});

app.use( (req,res) => {
    res.status(404).res.render('404', {pageTitle: 'Not Found'});
});

app.listen(3000);