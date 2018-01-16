

const nunjucks = require('nunjucks');
const express = require('express');
const app = express();
const routes = require('./routes')
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

app.use(function(req, res, next){
    console.log(req.method, ' / ', res.statusCode);
    next();
})
app.use(express.static('public'));
app.use('/', routes);
// let locals = {
//     title: "An Example",
//     people: [
//         {name: "Gandalf"},
//         {name: "Frodo"},
//         {name: "Hermione"}
//     ],
//     fruit: ['apples','bananas','oranges']
// };
// nunjucks.configure('views', {noCache: true});
// nunjucks.render("index.html", locals, function (err, output) {
//     console.log(output);
// });
// app.get('/',(req, res, next)=> {
//     //res.send('hello');
//     const people = [{name: "hope"}, {name: "this"}, {name: 'works'}];
//     res.render( 'index', locals);
// })

// app.get('/news',(req, res, next)=>res.send('THE NEWS'))

app.listen(3000,()=>console.log('Listening more'))