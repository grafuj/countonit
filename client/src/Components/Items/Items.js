import React, { useState, useEffect } from 'react';
import QuantityInput from './Quantity';

function Items(props) {
  const {items} = props;
  return (
    <div>
      <h1>Items</h1>
      <a href="http://localhost:3000/departments">Departments </a>
      <a href="http://localhost:3000/items">Items </a>
      <a href="http://localhost:3000/folders">Folders </a>
      <span>{items.map(item => {
        return (
          <>
          <QuantityInput />
          <p>{item.name}</p>
          <p>{item.description}</p>
          </>
          )
        }
      )
    }</span>
  </div>
);
}

export default Items;