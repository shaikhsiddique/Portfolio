const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const { connectDB, clientModel, validateClient } = require('./db');

connectDB();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/",(req,res)=>{
  res.send("hello")
})

app.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const { error } = validateClient({ name, email, phone, subject, message });
    if (error) {
      return res.status(400).json({ message: error.details.map((e) => e.message).join(', ') });
    }

    const data = await clientModel.create({ name, email, phone, subject, message });

    console.log('Form submission received and saved:', data);
    return res.status(201).json({ message: 'Form submission received and saved successfully!' });
  } catch (err) {
    console.error('Error processing form submission:', err);
    return res.status(500).json({ message: 'Internal Server Error. Please try again later.' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
