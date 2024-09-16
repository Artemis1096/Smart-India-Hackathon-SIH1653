// models/Question.js
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },
    difficultyLevel: { 
        type: String, 
        enum: ['easy', 'medium', 'hard'], 
        required: true 
    },
    subjectArea: { type: String, required: true },
    interviewId: { type: mongoose.Schema.Types.ObjectId, ref: 'Interview', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Question', QuestionSchema);
