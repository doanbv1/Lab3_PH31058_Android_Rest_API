const mongoose = require('mongoose');
const nodemon = require('nodemon');
const Schema = mongoose.Schema;

const Distributors = new Schema({

    name : {type: String}


},{
    timestamps: true
});

module.exports = mongoose.model('distribuutor', Distributors);