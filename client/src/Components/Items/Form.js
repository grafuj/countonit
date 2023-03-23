import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import deleteItem from "./Delete"
import axios from "axios";
import UploadPicture from "./hooks/AddPicture";
import ItemPriceCalculator from "./hooks/ItemPriceCalculator";
import "./Form.css";
import Dropdown from "./hooks/Dropdown";

const ItemForm = (props) => {
  const [picture, setPicture] = useState(null);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [formData, setFormData] = useState({
    image:  "",
    name: "",
    quantity: 0,
    price: 0,
    minimum_level: 0,
    total_cost: "",
    description: "",
    // need to make dynamic
    folder_id: 1,
    // need to make dynamic
    department_id: departmentID
  });
  // console.log("department prop+++", props.departments)

  const [departmentID, setDepartmentID] = useState(null); 

  function deleteItem(itemId) {
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

  const formRef = useRef();

// the user can input data on the items form
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = () => {
    deleteItem();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const itemData = {
      ...formData,
      department_id: departmentID,
      picture,
  
    };
    console.log("item data", itemData)

    // Saves an uploaded picture to cloudinary API
    try {
      const data = new FormData();
      data.append("file", picture);
      data.append("upload_preset", "xhecj54a");

      const cloudinaryApiCall = await fetch(
        "https://api.cloudinary.com/v1_1/dtvbwudm2/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const file = await cloudinaryApiCall.json();
      console.log("file.secure_url:", file.secure_url);
      itemData["image"] = file.secure_url;
    } catch (error) {
      console.log("Error saving picture", error);
      return;
    }
    // Submits form data to the backend
    try {
      const response = await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item: { ...itemData, price_cents: price, quantity },
        }),
      });
      const data = await response.json();
      console.log("Item saved successfully", data);
    } catch (error) {
      console.error("Error saving item", error);
    }
  };

  return (
    <form className="items-form" onSubmit={handleSubmit} ref={formRef}>
      <UploadPicture
        picture={picture}
        setPicture={setPicture}
        setFormData={setFormData}
      />
      <div>
        <Dropdown departments={props.departments} setDepartmentID={setDepartmentID} />
      </div>
      <div>
        <label className="item-input">
          Item name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="price-calc-input">
        <label>
          <ItemPriceCalculator
            price={price}
            quantity={quantity}
            setPrice={setPrice}
            setQuantity={setQuantity}
          />
        </label>
      </div>

      <div className="min-level-input">
        <label>
          Minimum Levels:
          <input
            type="number"
            name="minimum_level"
            value={formData.minimum_level}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="notes-input">
        <label>
          Notes:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <button type="submit">Save Item</button>

      <div className="delete-btn">
        <div>
          <FontAwesomeIcon
            icon="fa-solid fa-trash"
            size="2xl"
            style={{ color: "#ffffff" }}
            onClick={handleDelete}
          />
        </div>
      </div>
    </form>
  );
};

export default ItemForm;
