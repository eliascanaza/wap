const express = require('express');
const path = require('path');

const router = express.Router({
    "caseSensitive": false,
    "strict": false
});

router.get('/add', (req, res, next)=>{
    res.status(200)
        .sendFile(path.join(__dirname,'..', 'views', 'addProduct.html'));
});

router.post('/add', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/product/detail');
});

router.use('/detail', (req, res, next)=> {
    res.status(200)
        .sendFile(path.join(__dirname, '..','views' ,'product.html'));
});

module.exports = router;