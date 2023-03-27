import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteButton = ({ itemName, itemId, department_id }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`/api/items/${itemId}`)
      .then((response) => {
        console.log("Delete was successful!", response);
        alert(`${itemName} has been deleted!`);
        navigate(`/departments/${department_id}`);
        navigate(0);
      })
      .catch((error) => {
        console.log("Item did not delete", error);
        alert("Error! Could not delete. Please try again!");
      });
  };
  return (
    <button type="button" className="delete-icon" onClick={handleDelete}>
      <FontAwesomeIcon
        icon="fa-solid fa-trash"
        size="2xl"
        style={{ color: "#ffffff" }}
      />
    </button>
  );
};

export default DeleteButton;
