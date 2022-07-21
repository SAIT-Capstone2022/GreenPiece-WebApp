const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    // Add randomly generated id, will be used to associate user with hardware data.

    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        minlength: 3
    },

    password: {
        type: String,
        require: true,
        trim: true,
        minlength: 3
    },

    username: {
        type: String,
        require: true,
        trim: true,
        minlength: 3
    },

    phonenumber: {
        type: String,
        require: true,
        trim: true,
        minlength: 3
    },

    waterHistoryLog: [Object],

    verified: {
        type: Boolean,
        default: false
    },

}, {
    timestamps: true,
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, { expiresIn: "7d" });
    return token
};

const User = mongoose.model('User', userSchema);

const validate = (data) => {
    const schema = joi.object({
        email: joi.string().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        username: joi.string().required().label("Username"),
        phonenumber: joi.string().required().label("Phone Number"),
    });
    return schema.validate(data);
};

module.exports = { User, validate };