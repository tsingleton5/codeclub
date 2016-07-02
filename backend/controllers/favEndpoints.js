var User = require('../schemas/User.js');
var Problem = require('../schemas/Problem.js');

module.exports = {
  newLike: function (req, res) {
    console.log(req.body.favorite);
     User.findByIdAndUpdate(req.user._id, {$push:{"favorites": req.body.favorite}}, {upsert: true}, function (error, response) {
       if (error) {
         return res.status(500).send(error);
       }
       return res.status(200).json(response);
     })
  },

  getFavorites: function (req, res) {
    console.log(req.body, 'favsss');
    Problem.find({_id: {$in: req.body.fav}}, function (error, response) {
      console.log(response);
      console.log(error, 'error');
      if (error) {
        return res.status(500).send(error);
      }
      return res.status(200).json(response);
    })
  }

}
//updates with req.body.favorite thing and pushes it by $push
//req.params.id if your doing a :id - req.user._id is whoever is logged in so postman wouldn't do that
// {$push:{"favorites": Problem._id}}, {upsert: true},









// Contact.findByIdAndUpdate(
//         info._id,
//         {$push: {"messages": {title: title, msg: msg}}},
//         {safe: true, upsert: true, new : true},
//         function(err, model) {
//             console.log(err);
//         }
//     );
