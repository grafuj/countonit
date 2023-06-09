import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SearchResults(props) {
  const { items, departments } = props;
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
    minimumLevels: "",
    totalCost: "",
    description: "",
    folder_id: 1,
    department_id: "",
  });
  const departmentNames = {};
  const [filteredItems, setFilteredItems] = useState(items);

  const handleInputChange = (event) => {
    console.log(
      "event.target.val",
      event.target.value,
      "event.target.name",
      event.target.name
    );
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (items.length > 0) setFilteredItems(items);
    if (formData.name) {
      setFilteredItems((prev) =>
        prev.filter((item) => {
          return item.name.toLowerCase().includes(formData.name.toLowerCase());
        })
      );
    }
    if (formData.quantity) {
      setFilteredItems((prev) =>
        prev.filter((item) => {
          console.log(
            "item.quantity",
            item.quantity,
            "formData.quant",
            formData.quantity
          );
          return item.quantity === Number(formData.quantity);
        })
      );
    }
    if (formData.price) {
      setFilteredItems((prev) =>
        prev.filter((item) => {
          return item.price_cents
            .toString()
            .includes(formData.price.toString());
        })
      );
    }
    if (formData.minimumLevels) {
      setFilteredItems((prev) =>
        prev.filter((item) => {
          return item.minimum_level === Number(formData.minimumLevels);
        })
      );
    }
    if (formData.department_id) {
      setFilteredItems((prev) =>
        prev.filter((item) => {
          console.log(
            "item.deptid",
            item.department_id,
            "formdata.dept",
            formData.department_id
          );
          return item.department_id === Number(formData.department_id);
        })
      );
    }
  }, [
    items,
    formData.name,
    formData.quantity,
    formData.price,
    formData.minimumLevels,
    formData.department_id,
  ]);

  return (
    <>
      <h2>Search for products</h2>
      <div className="filters">
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
        <label className="item-input">
          Minimum level:
          <input
            type="text"
            name="minimumLevels"
            value={formData.minimumLevels}
            onChange={handleInputChange}
          />
        </label>
        <label className="item-input">
          Folder:
          <select
            value={formData.department_id}
            onChange={handleInputChange}
            name={"department_id"}
          >
            <option value="">--Select a folder--</option>
            {departments.map((department) => {
              departmentNames[department.id] = department.name;
              return (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              );
            })}
          </select>
        </label>
      </div>
      <table className="search-table">
        <tbody>
          <tr className="search-results">
            <td className="itemvaluetitle">Item Name:</td>
            <td className="itemvaluetitle">Quantity:</td>
            <td className="itemvaluetitle">Price:</td>
            <td className="itemvaluetitle">Minimum Level:</td>
            <td className="itemvaluetitle">Folder:</td>
          </tr>
          {filteredItems.map((item) => {
            const link = `/items/${item.id}`;
            return (
              <tr key={item.id} className="search-results">
                <td>
                  <Link
                    to={link}
                    state={{ item: item }}
                    className="itemvalue-search"
                  >
                    {item.name}
                  </Link>
                </td>
                <td className="itemvalue-search">{item.quantity}</td>
                <td className="itemvalue-search">
                  {(item.price_cents / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </td>
                <td className="itemvalue-search">{item.minimum_level}</td>
                <td className="itemvalue-search">
                  {departmentNames[item.department_id]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
