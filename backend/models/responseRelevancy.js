const mongoose = require('mongoose');

const ResponseRelevancySchema = new mongoose.Schema({
    response_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Response', required: true },
    relevancy_score: { type: Number, min: 0, max: 100, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ResponseRelevancy', ResponseRelevancySchema);
