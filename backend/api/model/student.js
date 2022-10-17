const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    imageUrl: String,
})

module.exports = mongoose.model('Student', studentSchema);