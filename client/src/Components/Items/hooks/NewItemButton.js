import React from "react";
import { useNavigate } from 'react-router-dom'

export default function NewItemButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/items/new')
  }
  return (
    <button type="button" onClick={handleClick}>Create New Item</button>
  );
}