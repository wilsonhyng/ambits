var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ambitSchema = new Schema({
  refId: {type: Number, index: true}, //three letters and then a number for repeats
  name: String,
  coords: {
    latitude: Number,
    longitude: Number
  },
  weekdays: {
    mon: Boolean,
    tue: Boolean,
    wed: Boolean,
    thu: Boolean,
    fri: Boolean,
    sat: Boolean,
    sun: Boolean
  },
  startDate: Date,
  checkIns: [Date] // a history of successful check-ins
  //time (when during the day are you supposed to check in)
  //repeats (every week? every other week? is this necessary?)
});

var Ambit = mongoose.model('Ambit', ambitSchema);

module.exports = Ambit;
