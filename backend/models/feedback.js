const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    interview_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Interview', required: true },
    feedback_text: { type: String, required: true },
    suggestions: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Feedback', FeedbackSchema);
