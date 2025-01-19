const nodemailer = require('nodemailer');
const Message = require('../models/portfolio');

const sendEmail = async (req, res) => {
  const { user_name, user_email, user_subject, message } = req.body;

  if (!user_name || !user_email || !user_subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newMessage = new Message({ user_name, user_email, user_subject, message });
    await newMessage.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: user_email,
      to: process.env.EMAIL_USER,
      subject: user_subject,
      text: `From: ${user_name}\nEmail: ${user_email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent and saved successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. ' + error.message });
  }
};

module.exports = { sendEmail };
