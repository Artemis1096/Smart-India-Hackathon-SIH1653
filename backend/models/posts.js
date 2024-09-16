const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    post_name: { type: String, required: true },
    required_expertise: { type: String, required: true },
    required_experience: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);
