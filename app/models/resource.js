/**
 * Created by jpulaski on 11/27/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resourceSchema = new Schema({
    name: {
        resourceName : String,
        contact: String,
        resourceBorough: String,
        resourceZip: Number
    }

});

module.exports = mongoose.model('Resource', resourceSchema);