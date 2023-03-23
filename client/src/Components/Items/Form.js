import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteButton from "./Delete";
// import usePictureInput from "./hooks/AddPicture";
import axios from "axios";
import UploadPicture from "./hooks/AddPicture";
import ItemPriceCalculator from "./hooks/ItemPriceCalculator";
import "./Form.css";



const ItemForm = () => {
  const [picture, setPicture] = useState(null);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    quantity: 0,
    price: 0,
    minimum_level: 0,
    total_cost: "",
    description: "",
    // need to make dynamic
    folder_id: 1,
    // need to make dynamic
    department_id: 2,
  });

  const formRef = useRef();


  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const itemData = {
      ...formData,
      picture
    };

// Saves an uploaded picture to cloudinary API 
    try{
    const data = new FormData();
    data.append("file", picture);
    data.append("upload_preset", "xhecj54a")

    const cloudinaryApiCall = await fetch("https://api.cloudinary.com/v1_1/dtvbwudm2/image/upload", {
      method: "POST",
      body: data
    }); 
    const file = await cloudinaryApiCall.json();
    console.log("file.secure_url:", file.secure_url)
    itemData['image'] = file.secure_url
    } catch (error) {
      console.log("Error saving picture", error)
      return;
    }
// Submits form data to the backend
    try {
      const response = await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item: { ...itemData, price_cents: price, quantity},
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
      <UploadPicture picture={picture} setPicture={setPicture} setFormData={setFormData}/>
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
        <DeleteButton />
      </div>

    </form>
  );
};

export default ItemForm;
