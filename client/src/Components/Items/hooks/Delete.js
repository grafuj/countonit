import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
// import Form from "../Form"
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

const DeleteButton = ({ itemId }) => {
  const handleDelete = () => {
    axios
      .delete(`/api/items/${itemId}`)
      .then((response) => {
        console.log("Delete was successful!", response);
        alert(`Item ${itemId} has been deleted!`)
      })
      .catch((error) => {
        console.log("Item did not delete", error);
        alert("Error! Could not delete. Please try again!")
      });
  };
  return (
    <button className="delete-icon" onClick={handleDelete}>
      <FontAwesomeIcon
        icon="fa-solid fa-trash"
        size="2xl"
        style={{ color: "#ffffff" }}
      />
    </button>
  );
};

export default DeleteButton;
