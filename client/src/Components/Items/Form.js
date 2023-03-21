import React, { useState } from 'react';
import DeleteButton from './Delete';
import usePictureInput from './hooks/AddPicture';
import ItemPriceCalculator from './hooks/ItemPriceCalculator';
import './Form.css';


const ItemForm = () => {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [formData, setFormData] = useState({
    item: '',
    quantity: 0,
    price: 0,
    minimumLevels: '',
    totalCost: '',
    notes: '',
    folder_id: 1
  });

const [picture, handlePictureChange] = usePictureInput();

  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


  const handleSubmit = async event => {
    event.preventDefault();
    
    const itemData = {
      ...formData,
      picture
    };

    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({item: {...itemData, price_cents: price, quantity}}),
      });
      const data = await response.json();
      console.log('Item saved successfully', data);
    } catch (error) {
      console.error('Error saving item', error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <label className='item-input'>
        Item name:
        <input type="text" name="item" value={formData.item} onChange={handleInputChange} />
      </label>
      <label className='price-calc-input'>
      <ItemPriceCalculator price={price} quantity={quantity} setPrice={setPrice} setQuantity={setQuantity} />
      </label>
      <label className='min-level-input'>
        Minimum Levels:
        <input type="number" name="minimum_level" value={formData.minimum_level} onChange={handleInputChange} />
      </label>
      <label className='notes-input'>
        Notes:
        <textarea name="notes" value={formData.notes} onChange={handleInputChange} />
      </label>
      <label className='pic-input'>
        Picture:
        <input type="file" accept="image/*" onChange={handlePictureChange} />
        {picture && <img src={picture} alt="Preview" />}
      </label>
      <button type="submit">Save Item</button>
      <DeleteButton />
    </form>
  );
};

export default ItemForm;




