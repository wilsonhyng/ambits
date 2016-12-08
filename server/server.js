var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(express.static(__dirname  +'/../client'));

app.set('views',__dirname + '/../client');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Should be refactored to go under /api
// Also, probably, to be rehandled in an external routehandler/ctrlrs

app.get('/locations', function(req, res) {
  res.send('locations go here');
});

app.post('/locations', function(req, res) {
  res.send('something something');
});

app.listen(app.get('port'));
console.log('Server is now listening at port ' + app.get('port'));