// *********************************************************************************
// apiRoutes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var friends = require("../data/friends.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all possible friends
  app.get("/api/all", function(req, res) {
    Book.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Post incoming Friends survey results
  app.post("/api/:book", function(req, res) {
    if (req.params.book) {
      Book.findAll({
        where: {
          title: req.params.book
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

 