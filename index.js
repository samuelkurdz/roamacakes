var express	=	require('express');
var app	=	express();

//template set-up
app.set('view engine', 'pug');
app.set('views','./views');

//serving static files
app.use(express.static(__dirname + '/public'));

//what to display for each pagination
app.get('/', function (req, res) {
    res.render('main');
});

app.get('/gallery', function(req, res){
    res.render('gallery')
});

app.get('/contacts', function(req, res){
    res.render('contacts')
})

//Error 404 page
app.use(function(req, res){
    res.status(404);
    res.send('404- page Not found');
});

//Server Error
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.send('500- Server Error')
});

app.listen(3000, function() {
    console.log('server running')
});
