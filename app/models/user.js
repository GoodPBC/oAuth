//here we bring in mongoose and setup our db schema for the for our mongodb
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var userSchema = new Schema({
    name: String,
    local: {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    admin: Boolean,
    location: String,
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date
});

userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.local.password);
}

// on every save, add the date
userSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});

// User.find({}, function(err, users) {
//     if (err) throw err;
//
//     // object of all the users
//     console.log(users);
// });
module.exports = mongoose.model('User', userSchema);
