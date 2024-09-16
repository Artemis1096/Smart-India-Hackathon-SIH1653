const mongoose = require('mongoose');

const QuestionRelevancySchema = new mongoose.Schema({
    question_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
    candidate_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Foreign key to Users where role = 'candidate'
    relevancy_score: { type: Number, min: 0, max: 100, required: true },
}, { timestamps: true });

module.exports = mongoose.model('QuestionRelevancy', QuestionRelevancySchema);
