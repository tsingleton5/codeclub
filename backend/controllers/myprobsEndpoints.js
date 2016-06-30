var Problem = require('../schemas/Problem.js');

module.exports = {
  findUsersProbs: function (req, res) {
    console.log(req.body);
    Problem.find({creator: req.user._id}, function (error, response) {
      if (error) {
        return res.status(500).send(error);
      }
      return res.status(200).json(response);
    })
  },
  addProblem: function (req, res) {
    req.body.creator = req.user._id;
    console.log(req.body);
    var newProblem = new Problem(req.body);
    newProblem.save(function (error, response) {
      if (error) {
        return res.status(500).send(error);
      }
      console.log('beginning', req.user, 'end');
      return res.status(200).json(response);
    })
  }, // adds a problem to that certain user logged in(passed in)

  editProblem: function (req, res) {
    console.log(req.body);
    // req.body = req.user.problem;
    Problem.findByIdAndUpdate(req.body._id, req.body, function (error, response) { // req.body same
      if (error) {
        return res.status(500).send(500);
      }
      return res.status(200).json(response);
    })
  },

  deleteProblem: function (req, res) {
    console.log('ctrl in back');
    Problem.findByIdAndRemove(req.params.id, function (error, response) {
      if (error) {
        return res.status(500).send(500);
      }
      return res.status(200).json(response);
    })
  }
  //ending
}
