import React, { useState, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DeleteButton from "./hooks/Delete";
import UploadPicture from "./hooks/AddPicture";
import ItemPriceCalculator from "./hooks/ItemPriceCalculator";
import Dropdown from "./hooks/Dropdown";
import "./Form.css";
import CancelButton from "./hooks/Cancel";

const ItemForm = (props) => {
  const location = useLocation();
  let navigate = useNavigate();
  console.log("LOCATION:", location);

  // how data is populated from the item edit/view form
  let item = "";
  if (!location.state) {
    console.log(item);
  } else {
    item = location.state.item;
  }
  console.log("item.image", item.image);
  const [picture, setPicture] = useState(null || `${item.image}`);
  const [departmentID, setDepartmentID] = useState(
    location?.state?.item?.department_id || null
  );
  const [price, setPrice] = useState(item.price_cents / 100);
  const [quantity, setQuantity] = useState(item.quantity);
  const [formData, setFormData] = useState({
    image: `${item.image}` || "",
    name: item.name || "",
    quantity: item.quantity || 0,
    price: item.price_cents / 100 || 0,
    minimum_level: item.minimum_level || 0,
    total_cost: "",
    description: item.description || "",
    folder_id: 1,
    department_id: item.department_id || departmentID,
  });

  const formRef = useRef();

  // used in the delete function
  const params = useParams();
  const itemId = params.id;

  // the user can input data on the items form
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // submits user data
  const handleSubmit = async (event) => {
    event.preventDefault();

    // alerts the user to select a department before saving the form
    if (!departmentID) {
      alert("Please select a department before saving!");
      return;
    }

    // data that is being passed in to the fetch call
    const itemData = {
      ...formData,
      department_id: departmentID,
      picture,
    };

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
    // Submits form data to the backend if there is no item id associated
    if (!itemId) {
      try {
        const response = await fetch("/api/items", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            item: { ...itemData, price_cents: price * 100, quantity },
          }),
        });
        const data = await response.json();
        console.log("Item saved successfully", data);
        navigate(`/departments/${departmentID}`);
        navigate(0);
      } catch (error) {
        console.error("Error saving item", error);
      }
    } else {
      // updates the item when there is an item id associated
      try {
        const response = await fetch(`/api/items/${itemId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            item: { ...itemData, price_cents: price * 100, quantity },
          }),
        });
        const data = await response.json();
        console.log("Item saved successfully", data);
        navigate(`/departments/${departmentID}`);
        navigate(0);
      } catch (error) {
        console.error("Error saving item", error);
      }
    }
  };

  return (
    <form className="items-form" onSubmit={handleSubmit} ref={formRef}>
      <label className="upload-pic">
        <UploadPicture
          picture={picture}
          setPicture={setPicture}
          setFormData={setFormData}
        />
      </label>

      <div>
        <label className="dropdown-input">
          <Dropdown
            departments={props.departments}
            setDepartmentID={setDepartmentID}
            departmentID={departmentID}
          />
        </label>
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
      <CancelButton />

      <div className="delete-btn">
        <DeleteButton itemId={itemId} />
      </div>
    </form>
  );
};

export default ItemForm;
