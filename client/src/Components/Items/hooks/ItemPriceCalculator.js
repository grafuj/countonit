import React from 'react';


export default function ItemPriceCalculator(props) { 
  const {price, quantity} = props;

  const handlePriceChange = (event) => {
    props.setPrice(Number(event.target.value));
  };
  
  const handleQuantityChange = (event) => {
    props.setQuantity(Number(event.target.value));
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
      <p>Total cost: ${calculateTotalCost()}</p>
    </div>
  );
}