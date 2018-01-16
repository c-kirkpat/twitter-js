const express = require('express');
const app = express();

app.use(function(req, res, next){
    console.log(req.method, ' / ', res.statusCode);
    next();
})

app.get('/',(req, res, next)=> {
    res.send('hello');
})
app.get('/news',(req, res, next)=>res.send('THE NEWS'))

app.listen(3000,()=>console.log('Listening more'))