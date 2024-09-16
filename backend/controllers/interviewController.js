// controllers/interviewController.js
const Interview = require('../models/Interview');

// Create a new interview
exports.createInterview = async (req, res) => {
    try {
        const interview = new Interview(req.body);
        await interview.save();
        res.status(201).json(interview);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all interviews
exports.getInterviews = async (req, res) => {
    try {
        const interviews = await Interview.find().populate('candidate_Id interviewer_Id');
        res.status(200).json(interviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get an interview by ID
exports.getInterviewById = async (req, res) => {
    try {
        const interview = await Interview.findById(req.params.id).populate('candidate_Id interviewer_Id');
        if (!interview) return res.status(404).json({ error: 'Interview not found' });
        res.status(200).json(interview);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an interview by ID
exports.updateInterview = async (req, res) => {
    try {
        const interview = await Interview.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(interview);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete an interview by ID
exports.deleteInterview = async (req, res) => {
    try {
        await Interview.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
