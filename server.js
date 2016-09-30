// server.js
var express    = require('express');       
var app        = express();                 
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 3000;        
var router = express.Router(); 


app.use(function(err, req, res, next) { // error handling defaults
  console.error(err.stack);
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).render('error', { error: err, stack: err.stack });
});

router.get('/', function(req, res) { res.json({ "Status":"Welcome to api home screen" }) });


app.use(express.static('static'));
app.use('/', router); // required base uri

app.listen(port); // listen for requests
console.log('server started on port ' + port);