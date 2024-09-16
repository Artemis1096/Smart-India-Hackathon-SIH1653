// controllers/scoringController.js
const Scoring = require('../models/Scoring');

// Create a new score entry
exports.createScoring = async (req, res) => {
    try {
        const scoring = new Scoring(req.body);
        await scoring.save();
        res.status(201).json(scoring);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all scores
exports.getScores = async (req, res) => {
    try {
        const scores = await Scoring.find().populate('response_Id');
        res.status(200).json(scores);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a score by ID
exports.getScoreById = async (req, res) => {
    try {
        const score = await Scoring.findById(req.params.id).populate('response_Id');
        if (!score) return res.status(404).json({ error: 'Score not found' });
        res.status(200).json(score);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a score by ID
exports.updateScore = async (req, res) => {
    try {
        const score = await Scoring.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(score);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a score by ID
exports.deleteScore = async (req, res) => {
    try {
        await Scoring.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
