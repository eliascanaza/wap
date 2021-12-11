const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router({
    "caseSensitive": false,
    "strict": false
});

router.get('/add', (req, res, next)=>{
    res.status(200)
        .sendFile(path.join(__dirname,'..', 'views', 'addUser.html'));
});

router.post('/add', (req, res, next)=>{
    console.log(req.body);
    let user = req.body;
    //adding parameters to the url
    res.redirect(`/user/detail?n=${user.name}&l=${user.lname}&e=${user.email}&a=${user.address}&c=${user.city}&s=${user.state}&z=${user.zip}`);
});

router.use('/detail', (req, res, next)=>{
    res.status(200)
        .sendFile(path.join(__dirname,'..', 'views', 'user.html'));
});

module.exports = router;