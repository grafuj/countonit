import React, { useState } from 'react';


export default function PriceInput() {
  const [price, setPrice] = useState(0);

  const handlePriceChange = (event) => {
    setPrice(parseFloat(event.target.value));
  }

  return (
    <div>
      <label htmlFor='price'>Price:</label>
      <input 
      type='number'
      id="price"
      name='price'
      value={price}
      min='0'
      step='0.01'
      onChange={handlePriceChange}
      />
    </div>
  )
}