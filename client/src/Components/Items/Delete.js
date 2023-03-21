import React from 'react';

function DeleteButton(props) {
  const handleDeleteClick = () => {
    // Call a function to delete the item
    props.onDeleteItem(props.itemId);
  };
  
  return (
    <button onClick={handleDeleteClick}>Delete</button>
  );
}

export default DeleteButton;