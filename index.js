const express = require('express');
const port = 3000;

const app = express();
const _member_router = require('./router/member_router')

app.use(express.json());

app.use(express.urlencoded({extended:false}));
 
app.use('/member',_member_router);

app.listen(port,()=>{
    console.log(`[INFO] Start server : PORT : ${port}`);
});