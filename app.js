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
app.use('/admin', adminData.router);

app.set('view engine', 'ejs');
app.set('views', 'views'); //By default it is "views" folder so not needed

app.get('/', (req,res) => {
    res.render('main', {
        pageTitle: 'Main Page',
        path: '/',
        activeMain: true });
});

app.use( (req,res) => {
    res.status(404).render('404', {pageTitle: 'Not Found', path:''});
})

app.listen(3000);