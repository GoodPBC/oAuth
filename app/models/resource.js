/**
 * Created by jpulaski on 11/27/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resourceSchema = new Schema({
    name: {
        resourceName : String,
        strAddress: String,
        borough: String,
        contact: Number,
        latitude: Number,
        longitude: Number,
        zipCode: Number
    }

});

// on every save, add the date
resourceSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});

module.exports = mongoose.model('Resource', resourceSchema);