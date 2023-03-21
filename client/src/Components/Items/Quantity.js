import React, { useState } from 'react';

export default function QuantityInput() {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  
  return (
    <div>
      <label htmlFor='quantity'>Quantity:</label>
      <input
      type="number"
      id="quantity"
      name="quantity"
      value={quantity}
      min="1"
      onChange={handleQuantityChange}
      />
    </div>
  );
};