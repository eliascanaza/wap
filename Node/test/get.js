const express = require('express');
const app = express();
1
app.use('/wap/:name/:course/:time', function (req, res) {
    //res.write(req.params);
    console.log(req.params);
    let data = [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi"
    }
    ];
    res.json(data);
    res.status(200);
    res.end();
}).listen(3000, () => console.log('running port 3000l'));