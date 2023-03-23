import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Form from "./Form"
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";


  const DeleteButton = ({ itemId }) => {
    console.log("ITEM ID", itemId)
    const handleDelete = () => {
      axios.delete(`/api/items/${itemId}`)
      .then(response => {
        console.log("Delete was successful!", response)
      })
      .catch(error => {
        console.log("Item did not delete", error)
      })
    }
    return (
      <button onClick={handleDelete}>
          <FontAwesomeIcon
            icon="fa-solid fa-trash"
            size="2xl"
            style={{ color: "#ffffff" }}
          />
      </button>
    )
  };

  export default DeleteButton;