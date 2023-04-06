const express = require('express');
const port = 3000;

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send('ok\r\n');
});

app.listen(port);