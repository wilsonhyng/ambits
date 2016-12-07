var mongoose = require(mongoose);

var Schema = mongoose.Schema;

var locationSchema = new Schema({
  name: String,
  geodata: Number
  //user for objectId
  //description for String
});

var Location = mongoose.model('Location', locationSchema);

module.exports = Location;
