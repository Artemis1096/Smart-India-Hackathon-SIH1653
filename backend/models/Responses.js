// models/Response.js
const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
    interview_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Interview', required: true },
    question_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
    responseText: { type: String, required: true },
    responseTime: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Response', ResponseSchema);
