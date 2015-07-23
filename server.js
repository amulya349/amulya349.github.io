var path = require('path')
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8180;

app.use(express.static(path.join(__dirname, '../')));

app.listen(port);
console.log('Listening at http://localhost:' + port);

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'index.html'));
})