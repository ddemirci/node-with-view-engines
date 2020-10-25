const rootPath = require('./utils/rootPath');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const shopData = require('./routes/shop');
const adminData = require('./routes/admin');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('handlebars', expressHbs({layoutsDir: 'views/layouts', defaultLayout:'main-layouts', extname:'handlebars'}));

app.set('view engine', 'handlebars');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootPath,'public'))); //to be able to use files in public folders

//Setting routes
app.use('/shop', shopData.router);
app.use('/admin', adminData.router);

app.get('/', (req,res) => {
    res.render('main', {
        pageTitle: 'Main Page',
        activeMain: true });
});

app.use( (req,res) => {
    res.status(404).render('404', {pageTitle: 'Not Found'});
});

app.listen(3000);