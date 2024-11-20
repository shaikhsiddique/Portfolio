const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const { connectDB, clientModel, validateClient } = require('./db');

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 
app.use(helmet());
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello, Backend is working!');
});

app.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const { error } = validateClient({ name, email, phone, subject, message });
    if (error) {
      console.error('Validation Error:', error.details);
      return res.status(400).json({ message: error.details.map((e) => e.message).join(', ') });
    }

    const data = await clientModel.create({ name, email, phone, subject, message });

    console.log('Form submission received and saved:', data);
    return res.status(201).json({ message: 'Form submission received and saved successfully!' });
  } catch (err) {
    console.error('Unexpected Error:', err);
    return res.status(500).json({ message: 'Internal Server Error. Please try again later.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
