var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  favorites: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
    unique: true 
  }]
})
//favorites: [problems]

userSchema.pre('save', function (next) {
  var user = this
  if (!user.isModified('password')) return next();
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(user.password, salt);
user.password = hash;
return next(null, user);
});


userSchema.methods.verifyPassword = function (reqBodyPassword) {
  var user = this;
  return bcrypt.compareSync(reqBodyPassword, user.password)
};




module.exports = mongoose.model('User', userSchema);
