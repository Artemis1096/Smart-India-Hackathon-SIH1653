// routes/protectedRoute.js
const express = require('express');
const verifyToken = require('../middleware/auth');
const router = express.Router();

router.get('/', verifyToken, (req, res) => {
    res.json('This is a protected route');
});

module.exports = router;
