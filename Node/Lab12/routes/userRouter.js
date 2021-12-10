const express = require('express');
const path = require('path');

const router = express.Router({
    "caseSensitive": false,
    "strict": false
});

router.get('/add', (req, res, next)=>{
    res.status(200)
        .sendFile(path.join(__dirname,'..', 'views', 'addUser.html'));
});

router.post('/new', (req, res, next)=>{
    console.log(req.body);
    res.end('Done...');
});

module.exports = router;