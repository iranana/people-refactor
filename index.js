const express = require("express");
const app = express();
const Datastore = require("nedb");
const fs = require("fs");
const cleanDeep = require("clean-deep");
const db = new Datastore({
  filename: "db.json",
  autoload: true
});

app.use("/dist", express.static("dist"));

app.get(["/api/people"], (req, res) => {
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
      return res.status(500).send({ status: 500, message: "Failed to read database." });
    }

    res.send(documents)
  });
});

app.get("/", function (req, res) {
  fs.readFile("./dist/index.html", "utf8", (error, data) => {
    if (error) {
      return res.status(500).send({ status: 500, message: "Couldn't find template." })
    }

    res.status(200).send(data);
  });
});

app.listen(3000, function () {
  console.log("-- Listening on port 3000 --")
});