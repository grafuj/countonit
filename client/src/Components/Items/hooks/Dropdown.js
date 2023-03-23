import React, { useState } from "react";

export default function Dropdown(props) {
  const {departments, setDepartmentID} = props;

  const [department, setDepartment] = useState('');

  const handleDropdown = (event) => {
    setDepartmentID(event.target.value);
    setDepartment(event.target.value);
  }

  return(
    <div>
      <label htmlFor="department-dropdown">Choose a department:</label> 
      <select id="department-dropdown" value={department} onChange={handleDropdown}>
      <option value="">--Please choose a department--</option>
      {
        departments && departments.map(department => (
          <option value={department.id}>{department.name}</option>
        ))
      }
      </select>
    </div>
  )
}