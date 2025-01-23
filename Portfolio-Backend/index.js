const express = require('express');
const mongoose = require('mongoose');
const portfolioRoutes = require('./routes/portfolioRoutes');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'https://kumar-satyam-portfolio.netlify.app' }));
app.use(bodyParser.json());

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

app.use('/api', portfolioRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
