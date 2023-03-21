import React, {useState} from 'react';
// import QuantityInput from '../Quantity';
// import PriceInput from '../Price';


export default function ItemPriceCalculator() {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  
  const handlePriceChange = (event) => {
    setPrice(Number(event.target.value));
  };
  
  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };
  
  const calculateTotalCost = () => {
    return price * quantity;
  };
  
  return (
    <div>
      <label>
      Quantity:
        <input type="number" value={quantity} onChange={handleQuantityChange} />
      </label>
      <label>
      Price:
        <input type="number" value={price} onChange={handlePriceChange} />
      </label>
      <p>Total cost: {calculateTotalCost()}</p>
    </div>
  );
}