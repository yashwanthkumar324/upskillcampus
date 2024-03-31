// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/agricultureDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define schema and model for sensor data
const sensorDataSchema = new mongoose.Schema({
  temperature: Number,
  humidity: Number,
  soilMoisture: Number,
  soilTemperature: Number,
  timestamp: { type: Date, default: Date.now }
});
const SensorData = mongoose.model('SensorData', sensorDataSchema);

// API endpoint to receive sensor data
app.post('/api/sensor-data', async (req, res) => {
  try {
    const newData = new SensorData(req.body);
    await newData.save();
    res.status(201).json({ message: 'Sensor data received successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to receive sensor data' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
