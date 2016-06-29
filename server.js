//need to require passport and install it
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var mongoose = require('mongoose');

var config = require('./config.json');
var endpointCtrl = require('./controllers/endpoint.js');
var myprobsEP = require('./controllers/myprobsEndpoints.js');
var Problem = require('./schemas/Problem.js');
var User = require('./schemas/User.js')

mongoose.connect('mongodb://localhost/codeclub');

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/frontend'));
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: true,
}))



//search
//get problems on search
app.get('/search', endpointCtrl.index);

//fav

//myprobs
//creates a problem to that user passed in /userid
app.post('/myprobs/:userid', myprobsEP.addProblem);


// THIS SEARCHES FOR ALL PROBLEMS WITH THAT CERTAIN CREATOR
app.get('/myprobs/:userid', myprobsEP.findUsersProbs);
//need to get that users all of their problems
//  User.findById(req.params.userid, function (error, response) {










//post prob
// app.post('/search', function (req, res) {
//   var newProb = new Problem(req.body);
//   newProb.save(function (error, response) {
//     if (error) {
//       return res.status(500).send(error);
//     }
//     return res.status(200).json(response);
//   })
// })

//make user - need to put this in sigh up function
app.post('/user', function (req, res) { // THIS IS HOW I'VE BEEN MAKING NEW USERS
  var newUser = new User(req.body);
  newUser.save(req.body, function (error, response) {
    if (error) {
      return res.status(500).send(error);
    }
    return res.status(200).json(response);
  })
})





var port = 8000;
app.listen(port, function () {
  console.log('running on port', port);
})
