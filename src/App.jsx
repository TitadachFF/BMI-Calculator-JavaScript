// src/App.js
import React, { useState } from 'react';
import './App.css';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (isNaN(heightInMeters) || isNaN(weightInKg) || heightInMeters <= 0 || weightInKg <= 0) {
      alert('Please enter valid data');
      return;
    }

    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));
  };

  return (
    <div className="bmi-container">
      <h1>BMI Calculator</h1>
      <div className="input-group">
        <label>Height (cm):</label>
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Weight (kg):</label>
        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && (
        <div className="result">
          <h2>Result</h2>
          <p>Your BMI: {bmi}</p>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BMICalculator />
    </div>
  );
}

export default App;
