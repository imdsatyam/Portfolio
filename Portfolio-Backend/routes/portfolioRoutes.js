const express = require('express');
const { sendEmail } = require('../controllers/emailController');
const router = express.Router();

router.post('/send-email', sendEmail);
router.get('/hello', (req, res) => res.send("Hello fox"));

module.exports = router;
