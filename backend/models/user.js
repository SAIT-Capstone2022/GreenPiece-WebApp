const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const Joi = require('joi');

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
        unique: true,
        trim: true,
        minlength: 3
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
        email: Joi.string().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        username: Joi.string().required().label("Username"),
        phonenumber: Joi.string().required().label("Phone Number"),
    })
}

module.exports = {User, validate};