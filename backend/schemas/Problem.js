var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var problemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  difficulty: {
    type: String,
    required: true,
    enum: [
      "beginner",
      "intermediate",
      "advanced"
    ]
  },
  definition: {
    type: String,
    required: true
  },
  solution: {
    type: String,
    required: true
  },
  created: {type: Date, default: new Date()}
})

module.exports = mongoose.model('Problem', problemSchema);
