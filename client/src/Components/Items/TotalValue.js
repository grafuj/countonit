import React from 'react';

function TotalValue({ items }) {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <p>Total value: ${total.toFixed(2)}</p>
    </div>
  );
}

export default TotalValue;
