//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/TEMPLATE.html'));
});
app.get('/OnPageAndOffpageSEO', function(req, res){
  res.sendFile(path.join(__dirname, 'views/OnPageAndOffpageSEO.html'));
});
app.get('/SEOandSEM', function(req, res){
  res.sendFile(path.join(__dirname, 'views/OnPageAndOffpageSEO.html'));
});
app.get('/Backlinks', function(req, res){
  res.sendFile(path.join(__dirname, 'views/Backlinks.html'));
});
app.get('/On-PageSEO', function(req, res){
  res.sendFile(path.join(__dirname, 'views/On-PageSEO\'simportantHTMLelements.html'));
});
app.get('/StatusCodes', function(req, res){
  res.sendFile(path.join(__dirname, 'views/HTMLStatusCodes.html'));
});
app.get('/bestpractice', function(req, res){
  res.sendFile(path.join(__dirname, 'views/SEO\'sBestPractice.html'));
});
app.get('/SEOStrategies', function(req, res){
  res.sendFile(path.join(__dirname, 'views/OnPageAndOffpageSEO.html'));
});
app.get('/URL', function(req, res){
  res.sendFile(path.join(__dirname, 'views/URL.html'));
});
app.get('/SEOStrategies', function(req, res){
  res.sendFile(path.join(__dirname, 'views/OnPageAndOffpageSEO.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});