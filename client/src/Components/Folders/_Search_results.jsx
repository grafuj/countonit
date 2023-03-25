import React, { useState, useEffect } from "react";

export default function SearchResults(props) {
  const { items, departments } = props;
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
    minimumLevels: "",
    totalCost: "",
    description: "",
    // need to make dynamic
    folder_id: 1,
    department_id: "",
  });

  const [filteredItems, setFilteredItems] = useState(items);

  const handleInputChange = (event) => {
    console.log("event.target.val", event.target.value, "event.target.name", event.target.name);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // console.log("filteredItems:", filteredItems);
  console.log("items:", items);

  useEffect(() => {
    if (items.length > 0) setFilteredItems(items);
    if (formData.name) {
      setFilteredItems(prev => prev.filter(
        item => {
          return item.name.toLowerCase().includes(formData.name.toLowerCase());
        })
      );
    };
    if (formData.quantity) {
      setFilteredItems(prev => prev.filter(
        item => {
          console.log("item.quantity", item.quantity, "formData.quant", formData.quantity);
          return item.quantity === Number(formData.quantity);
        }
      ));
    };
    if (formData.price) {
      setFilteredItems(prev => prev.filter(
        item => {
          // console.log("item.price", item.price, "formData.quant", formData.price);
          return item.price_cents.toString().includes(formData.price.toString());
        }
      ));
    };
    if (formData.minimumLevels) {
      setFilteredItems(prev => prev.filter(
        item => {
          return item.minimum_level === Number(formData.minimumLevels);
        }
      ));
    };
    if (formData.department_id) {
      setFilteredItems(prev => prev.filter(
        item => {
          console.log("item.deptid", item.department_id, "formdata.dept", formData.department_id);
          return item.department_id === Number(formData.department_id);
        }
      ));
    };
  }, [items, formData.name, formData.quantity, formData.price, formData.minimumLevels, formData.department_id]);

  return (
    <>
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
          Department:
          <select value={formData.department_id} onChange={handleInputChange} name={"department_id"}>
            <option value="">--Select a department--</option>
            {departments.map((department) => {
              return (
                <option key={department.id} value={department.id}>{department.name}</option>
              );
            })}
          </select>
        </label>
      </div>
      <table className="search-table">
        <tbody >
          <tr className="search-results">
            <td>Item Name</td>
            <td className="itemvalue">Quantity</td>
            <td className="itemvalue">Price</td>
            <td className="itemvalue">Minimum Level</td>
            <td className="itemvalue">Department</td>
          </tr>
          {filteredItems.map((item) => {
            return (
              <tr key={item.id} className="search-results">
                <td className="itemvalue">{item.name}</td>
                <td className="itemvalue">{item.quantity}</td>
                <td className="itemvalue">${item.price_cents/100}</td>
                <td className="itemvalue">{item.minimum_level}</td>
                <td className="itemvalue">{item.department_id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}