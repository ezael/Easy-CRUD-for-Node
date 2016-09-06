var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ClientSchema   = new Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('Client', ClientSchema);
