const express = require('express');
const cors = require('cors');
const bookRouter = require('./routers/bookRouter');

const app = express();

app.use(express.json());
app.use(cors());

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

app.listen(3000, ()=>console.log('listening on port 3000'));

