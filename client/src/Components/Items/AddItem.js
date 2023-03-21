import React, { useState } from 'react';

export default function NewItemForm({ onNewItem }) {
  const [itemName, setItemName] = useState("");

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  }

  const handleNewItemSubmit = (event) => {
    event.preventDefault();

    onNewItem(itemName);

    setItemName("");
  };

  return(
    <form onSubmit={handleNewItemSubmit}>
      <label htmlFor='item-name'>Item Name:</label>
      <input 
      type='text'
      id='item-name'
      name='item-name'
      value={itemName}
      onChange={handleNameChange}
      required
      />
      {/* <button type='submit'>Add Item</button> */}
    </form>
  )
}