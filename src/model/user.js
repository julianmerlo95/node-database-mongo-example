const mongoose = require('mongoose');
const scheme = mongoose.Schema;

const userSchema = new scheme({
    name: String,
    lastName: String,
    age: Number,
});

module.exports = mongoose.model('user', userSchema);