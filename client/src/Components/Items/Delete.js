import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Form from "./Form"
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

export default function deleteItem(itemId) {
  axios
    .delete(`/api/items/${itemId}`)
    .then((response) => {
      console.log("Item deleted sucessfully!");
      setFormData((prevState) => {
        const newState = { ...prevState };
        // remove deleted item from state
        newState.items = prevState.items.filter((item) => item.id !== itemId);
        return newState;
      });
    })
    .catch((err) => {
      console.log("Error! Item did not delete:", err);
    });
}


