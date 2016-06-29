var User = require('../schemas/User.js');

module.exports = {
  register: function (req, res) {
    User.create(req.body, function (err, result) {
      if(err) {
        return res.status(500).send(err)
      }
      newUser = result.toObject();
      newUser.password = null;
      res.status(200).json(newUser);
    })
  },

  me: function (req, res) {
    if (!req.user) {
      return res.status(401).send('current user not defined');
    }
    req.user.password = null;
    return res.status(200).json(req.user);
  },

  update: function (req, res) {
    User.findByIdAndUpdate(req.params._id, req.body, function (error, result) {
      if (error) {
        next(error)
      }
      res.status(200).send('user updated');
    })
  }
}
