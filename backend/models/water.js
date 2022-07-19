const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const waterSchema = new Schema({
    water: {
        type: String
    }

}, {
    timestamps: true,
});


const Water = mongoose.model('Water', waterSchema);

module.exports = Water;
