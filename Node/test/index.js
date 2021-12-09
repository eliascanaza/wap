const express = require('express');
const path = require('path');

const app = express();

app.use('/myassets',express.static(path.join(__dirname, 'assets')));

app.use('/newProduct', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
}).listen(3000, ()=>console.log("listening port 3000"));

app.use((req, res, next)=>{
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});