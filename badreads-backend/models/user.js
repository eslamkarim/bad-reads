const mongoose = require('mongoose')
const Bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    imgUrl: {type: String},
    email: {type: String, required: true, match: /^\w+\@\w+\.\w/, unique: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false}
});


userSchema.methods.getFullName = function getFullName() {
    return this.firstName+" "+this.lastName
}

userSchema.pre('save',function(next){
    if(!this.isModified("password")) {
        return next();
    }
    this.password = Bcrypt.hashSync(this.password, 10);
    next();
})

userSchema.methods.comparePassword = function(plaintext, callback) {
    return callback(null, Bcrypt.compareSync(plaintext, this.password));
};
const userModel = mongoose.model('User', userSchema);

module.exports = userModel
