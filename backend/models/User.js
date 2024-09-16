// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone_number: { type: String, required: true },
    role: { type: String, enum: ['candidate', 'interviewer'], required: true },
    expertiseArea: { type: String },  // Only for interviewers
    post_applied_for: { type: String },  // Only for candidates
    experience_level: { type: String, enum: ['Entry-level', 'Mid-level', 'Senior-level'] },  // Only for candidates
    qualification: { type: String },  // Only for candidates
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
