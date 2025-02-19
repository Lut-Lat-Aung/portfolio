const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Mongoose schema and model
const ContactSchema = new mongoose.Schema({
  email: String,
  phone: String,
  github: String
});

const EducationSchema = new mongoose.Schema({
  degree: String,
  institute: String,
  duration: String
});

const ExperienceScheme = new mongoose.Schema({
  name: String,
  project: String,
  duration: String,
  description: String
});



const Contact = mongoose.model('ContactInfo', ContactSchema, 'ContactInfo');

const Education = mongoose.model('EducationInfo', EducationSchema, 'EducationInfo');


const Experience = mongoose.model('ExperienceInfo', ExperienceScheme, 'ExperienceInfo');

// API to fetch experience information
app.get('/api/experience', async (req, res) => {
  try {
    const experience = await Experience.find();

    
    res.json(experience);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch experience info' });
  }
}



);


// API to fetch education information
app.get('/api/education', async (req, res) => {
  try {
    const education = await Education.find();

    
    res.json(education);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch education info' });
  }
}



);

// API to fetch contact information
app.get('/api/contact', async (req, res) => {
  try {
    
    const contact = await Contact.find(); // Fetch first contact record
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contact info" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
