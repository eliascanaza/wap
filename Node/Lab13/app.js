const express = require('express');
const cors = require('cors');
const app = express();

const bookRouter = require('./routers/bookRouter');

//app.use(cors);
app.use(express.json());

app.use('/books', bookRouter);

/* app.use((req, res, next)=> { 
    console.log()
    res.status(404)
        .json({error: req.url + ' API not supported!!'});
}); */

app.use((err, req, res, next) => {
    if (err.message === 'NOT Found') {
        res.status(404).json({ error: req.url + ' API not supported!!' });
    } else {
        res.status(500).json({ error: 'Something is wrong! Try later' });
    }
});

app.listen(4000, ()=>console.log('listening on port 4000'));

