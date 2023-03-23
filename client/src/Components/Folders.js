import React, { useState } from 'react';
// import { useEffect } from 'react';

function Folders(props) {
  const { folders, departments, items } = props;
  const [formData, setFormData] = useState({
    name: "",
    quantity: null,
    price: null,
    minimumLevels: "",
    totalCost: "",
    description: "",
    // need to make dynamic
    folder_id: 1,
    department_id: null,
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div>
        <h1>Folders</h1>
        <span>{folders.map(folder => <p>{folder.name}</p>)}
        </span>
      </div>
      <div>
        <h1>Filters</h1>
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
          <label className="item-input">
            Quantity:
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
            />
          </label>
          <label className="item-input">
            Price:
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <table>
          <tr>
            <td>Item Name</td>
            <td></td>
            <td>Quantity</td>
            <td>Minimum Level</td>
          </tr>
          {props.items.map((item) => {
            return ((
              item.name.includes(formData.name)  // &&
              // item.quantity === formData.quantity
              ) && (
                <tr>
                  <td>{item.name}</td>
                  <td></td>
                  <td>{item.quantity}</td>
                  <td>{item.minimum_level}</td>
                </tr>
              )
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Folders;
