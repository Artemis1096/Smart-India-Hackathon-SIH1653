// controllers/responseController.js
const Response = require('../models/Response');

// Create a new response
exports.createResponse = async (req, res) => {
    try {
        const response = new Response(req.body);
        await response.save();
        res.status(201).json(response);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all responses
exports.getResponses = async (req, res) => {
    try {
        const responses = await Response.find().populate('question_Id candidate_Id');
        res.status(200).json(responses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a response by ID
exports.getResponseById = async (req, res) => {
    try {
        const response = await Response.findById(req.params.id).populate('question_Id candidate_Id');
        if (!response) return res.status(404).json({ error: 'Response not found' });
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a response by ID
exports.updateResponse = async (req, res) => {
    try {
        const response = await Response.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a response by ID
exports.deleteResponse = async (req, res) => {
    try {
        await Response.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
