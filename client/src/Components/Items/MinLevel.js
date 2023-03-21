import React, { useState } from 'react';

export default function MinimumLevelInput() {
  const [minimumLevel, setMinimumLevel] = useState(1);

  const handleMinimumLevelChange = (event) => {
    setMinimumLevel(parseInt(event.target.value));
  }

  return (
    <div>
      <label htmlFor='minimumLevel'>
        Minimum Level:
      </label>
      <input 
      type="number"
      id="minimumLevel"
      name="minimumLevel"
      value={minimumLevel}
      min="1"
      max="500"
      onChange={handleMinimumLevelChange}
      />
    </div>
  )
}