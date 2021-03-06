const express = require('express');
const path = require('path');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const homeRouter = require('./routes/homeRouter');

const app = express();

//set port
app.set('port', process.env.PORT || 3000);

const port = app.get('port');

//changing the name of the assets folder
app.use('/myassets', express.static(path.join(__dirname, 'assets')));

//allow to use query string
app.use(express.urlencoded({
    extended: true
}));

//add first module of our routers
app.use('/product', productRouter);
app.use('/user', userRouter);
app.get('/', homeRouter);

//customize 404 web page
app.use((req, res, next)=>{
    res.status(404)
        .sendFile(path.join(__dirname, 'views', '404.html'));
});

//customize error handler
app.use((req, res, next)=>{
    res.status(500)
        .send(`Something broke! ${err}`);
});

//listening webpage
app.listen(port, ()=>{
    console.log('Your Server is running on ' + port);
});
