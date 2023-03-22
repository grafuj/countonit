import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DeleteButton(props) {
  const handleDeleteClick = () => {
    // Call a function to delete the item
    props.onDeleteItem(props.itemId);
  };
  
  return (
    <div>
    <FontAwesomeIcon icon="fa-solid fa-trash" size="2xl" style={{color: "#ffffff",}} onClick={handleDeleteClick}/>
    </div>
    );
}

export default DeleteButton;