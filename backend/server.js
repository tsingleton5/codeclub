//need to require passport and install it
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var mongoose = require('mongoose');

var config = require('./config.json');
var endpointCtrl = require('./controllers/endpoint.js');
var myprobsEP = require('./controllers/myprobsEndpoints.js');
var favEP = require('./controllers/favEndpoints.js');
var Problem = require('./schemas/Problem.js');
var User = require('./schemas/User.js')

var UserCtrl = require('./controllers/authCtrl.js');
var passport = require('./services/passport.js');

var isAuthed = function (req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
}

mongoose.connect('mongodb://localhost/codeclub');

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + './../frontend'));
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());



//<auth

app.post('/signup', UserCtrl.register); //sign up
app.get('/me', isAuthed, UserCtrl.me); //gets the current user object
app.put('/users/:_id', isAuthed, UserCtrl.update); // needed to update user info

app.post('/login', passport.authenticate('local', {
  successRedirect: '/search'
}));

app.get('/logout', function (req, res) {
  req.logout();
  return res.status(200).send('logged out');
})

//auth/>




//




//search
//get problems on search
app.get('/search', endpointCtrl.index);


//start fav

app.put('/fav', favEP.newLike);


//end fav


//myprobs
//creates a problem to that user passed in /userid
app.post('/myprobs', isAuthed, myprobsEP.addProblem);


// THIS SEARCHES FOR ALL PROBLEMS WITH THAT CERTAIN CREATOR
app.get('/myprobs', isAuthed, myprobsEP.findUsersProbs);
//need to get that users all of their problems
//  User.findById(req.params.userid, function (error, response) {


//add is authend when done
app.put('/myprobs', myprobsEP.editProblem);

app.delete('/myprobs/:id', myprobsEP.deleteProblem);





//account

app.put('/account', isAuthed, function (req, res) {
  console.log(req.body);
  User.findById(req.user._id, function (err, user) {
    if (err) {
      return res.status(500).send(err);
    }
    for (var key in req.body) {
      user[key] = req.body[key];
    }
    user.save(function(error, response) {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).json(response);
    })
  })
})










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
}) // THIS IS HOW ILL CREATE ACCOUNTS FROM POSTMAN

app.delete('/commander/:id', function (req, res) { // THIS WHEN YOU PASS IN AN PROBLEM ID, DELETES IT FOR ME ONLY
  Problem.findByIdAndRemove(req.params.id, function (error, response) {
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
