import React, { useState, useEffect } from 'react';

import MinimumLevelInput from './MinLevel';
import NotesInput from './Notes';
import NewItemForm from './AddItem';
import DeleteButton from './Delete';
import SaveButton from './Save';
import ItemPriceCalculator from './hooks/ItemPriceCalculator';


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
          <NewItemForm />
          <ItemPriceCalculator />
          <MinimumLevelInput />
          <NotesInput />
          <SaveButton />
          <DeleteButton />
      
          {/* <button onClick={SaveItem}>Save Item</button> */}

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