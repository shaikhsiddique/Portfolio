const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const xssClean = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const dotenv = require('dotenv');

const { connectDB, clientModel, validateClient } = require('./db');

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

app.use(cors({
  origin: 'https://portfolio-ruby-phi-51.vercel.app',
  methods: ['POST'],
}));

app.use(morgan('combined'));

app.use(xssClean());

app.use(mongoSanitize());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'Too many requests from this IP. Please try again later.',
});
app.use('/contact', limiter);

app.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const { error } = validateClient({ name, email, phone, subject, message });
    if (error) {
      return res.status(400).json({ message: error.details.map((e) => e.message).join(', ') });
    }

    const data = await clientModel.create({ name, email, phone, subject, message });

    return res.status(201).json({ message: 'Form submission received and saved successfully!' });
  } catch (err) {
    return res.status(500).json({ message: 'Internal Server Error. Please try again later.' });
  }
});

app.listen(port);
