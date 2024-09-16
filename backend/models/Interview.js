// models/Interview.js
const mongoose = require('mongoose');

const InterviewSchema = new mongoose.Schema({
    candidate_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Foreign key to Users where role = 'candidate'
    interviewer_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // Foreign key to Users where role = 'interviewer', nullable for AI-driven interviews
    job_Role: { type: String, required: true },
    interview_Type: { type: String, enum: ['ai-driven', 'human-driven'], required: true },
    status: { type: String, enum: ['pending', 'completed', 'ongoing'], default: 'pending' },
    startTime: { type: Date },
    endTime: { type: Date },
    finalScore: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model('Interview', InterviewSchema);

