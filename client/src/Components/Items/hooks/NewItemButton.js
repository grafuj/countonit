import React from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewItemButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/items/new');
  };
  return (
    <button className="new-item-btn" type="button" onClick={handleClick}>
      {/* Create New Item */}
      <FontAwesomeIcon icon="fa-solid fa-circle-plus" size="2xl" style={{ color: "#ffffff", }} />
    </button>
  );
}