import React, { useState } from "react";

export default function Dropdown(props) {
  const { departments, setDepartmentID } = props;

  const [department, setDepartment] = useState(props.departmentID || "");

  const handleDropdown = (event) => {
    setDepartmentID(event.target.value);
    setDepartment(event.target.value);
  };

  return (
    <div>
      <label htmlFor="department-dropdown">Choose a folder:</label>
      <select
        id="department-dropdown"
        value={department}
        onChange={handleDropdown}
      >
        <option value="">--Please choose a folder--</option>
        {departments &&
          departments.map((department) => (
            <option key={department.id} value={department.id}>
              {department.name}
            </option>
          ))}
      </select>
    </div>
  );
}
