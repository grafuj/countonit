import React from "react";

export default function ItemPriceCalculator(props) {
  const { price, quantity } = props;
  console.log("PRICE", price);

  const handlePriceChange = (event) => {
    props.setPrice(Number(event.target.value));
  };

  const handleQuantityChange = (event) => {
    props.setQuantity(Number(event.target.value));
  };

  const calculateTotalCost = () => {
    if (price && quantity) {
      return (price * quantity).toFixed(2);
    }
  };

  return (
    <div>
      <label>
        Quantity:
        <input
          name="quantity"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </label>
      <label>
        Price:
        <input
          name="price"
          type="number"
          value={price}
          onChange={handlePriceChange}
        />
      </label>
      <p>Total cost: ${calculateTotalCost() || 0}</p>
    </div>
  );
}
