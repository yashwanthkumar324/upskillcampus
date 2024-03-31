// App.js

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [sensorData, setSensorData] = useState({
    temperature: 0,
    humidity: 0,
    soilMoisture: 0,
    soilTemperature: 0
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/sensor-data', sensorData);
      console.log('Sensor data sent successfully');
    } catch (error) {
      console.error('Failed to send sensor data:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSensorData({ ...sensorData, [name]: value });
  };

  return (
    <div>
      <h1>Smart Agriculture IoT</h1>
      <form onSubmit={handleSubmit}>
        <label>Temperature:</label>
        <input type="number" name="temperature" value={sensorData.temperature} onChange={handleChange} /><br />
        <label>Humidity:</label>
        <input type="number" name="humidity" value={sensorData.humidity} onChange={handleChange} /><br />
        <label>Soil Moisture:</label>
        <input type="number" name="soilMoisture" value={sensorData.soilMoisture} onChange={handleChange} /><br />
        <label>Soil Temperature:</label>
        <input type="number" name="soilTemperature" value={sensorData.soilTemperature} onChange={handleChange} /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
