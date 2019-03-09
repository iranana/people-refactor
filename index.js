var express = require('express');
var app = express();
var Datastore = require('nedb'),
  db = new Datastore({
    filename: 'MOCK_DATA.json',
    autoload: true
  });
var fs = require('fs');
var handlebars = require('handlebars');
var cleanDeep = require('clean-deep');

app.use('/dist', express.static('dist'));

app.get(['/api/people'], (req, res) => {
  const { gender, maxAge, minAge, pet } = req.query;

  const query = {
    gender: gender,
    age: {
      $gte: minAge ? parseInt(minAge) : null,
      $lt: maxAge ? parseInt(maxAge) : null
    },
    pet: {
      $regex: pet ? new RegExp(pet, "i") : null
    }
  }

  const cleanQuery = cleanDeep(query);

  db.find(cleanQuery, {}, (error, documents) => {
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