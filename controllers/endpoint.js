var Problem = require('../schemas/Problem.js');

module.exports = {
  index: function (req, res) {
    Problem.find(req.query.id, function (error, response) {
      if (error) {
        return res.status(500).send(error);
      }
      return res.status(200).json(response);
    }).populate('creator')
  }, // this get's all problems to /search page

}
