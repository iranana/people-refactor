var express = require('express');
var app = express();
var Datastore = require('nedb'),
  db = new Datastore({
    filename: 'db.json',
    autoload: true
  });
var fs = require('fs');
var handlebars = require('handlebars');

app.use('/dist', express.static('dist'));

app.get(['/api/people'], (req, res) => {
  let { gender, maxAge, minAge } = req.query;
  let query = {};
 
  if (gender) {
    query.gender = gender;
  } 
  
  if (maxAge || minAge) { 
    query.age = {};

    if (maxAge) {
      query.age.$lt = parseInt(maxAge)
    }
    
    if (minAge) {
      query.age.$gte = parseInt(minAge)
    }
  }

  db.find(query, {}, (error, documents) => {
    if (error) {
      return res.status(500).send({ status: 500, message: "Failed to read database" });
    }

    res.send(documents)
  });
});

app.get('/', function (req, res) {
  fs.readFile('./dist/index.html', 'utf8', (err, data) => {
    var template = handlebars.compile(data);
    var rendered = template();
    res.contentType('text/html');
    res.status(200).send(rendered);
  });
});

app.listen(3000, function () {
  console.log('-- running on port 3000 --')
});