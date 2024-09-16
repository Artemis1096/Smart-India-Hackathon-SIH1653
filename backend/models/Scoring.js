const mongoose = require('mongoose');

const ScoringSchema = new mongoose.Schema({
    interview_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Interview', required: true },
    question_relevancy_score: { type: Number, required: true },
    response_relevancy_score: { type: Number, required: true },
    total_score: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Scoring', ScoringSchema);
