const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    password: String,
    userType: String,
    firstName: String,
    lastName: String,
    LNUid: {
        type: String,
        unique: true
    },
    licenseNumber: String,
    age: Number,
    dob: Date,
    carDetails: {
        make: String,
        model: String,
        year: Number,
        modelType: String,
        plateNumber: String
    }
}, { timestamps: true });

module.exports = mongoose.model('User', user);
