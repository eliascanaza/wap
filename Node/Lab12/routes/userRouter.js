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
    res.redirect('/user/detail');
});

router.use('/detail', (req, res, next)=>{
    res.status(200)
        .sendFile(path.join(__dirname,'..', 'views', 'user.html'));
});

module.exports = router;