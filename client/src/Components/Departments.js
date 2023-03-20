import React, { useState, useEffect } from 'react';

function Departments(props) {
    const {departments} = props
  return (
    <div>
      <h1>Departments</h1>
      <a href="http://localhost:3000/departments">Departments </a>
      <a href="http://localhost:3000/items">Items </a>
      <a href="http://localhost:3000/folders">Folders </a>

      <span>{departments.map(department => {
        return (
          <>
          <p>{department.name}</p>
          </>
          )
        }
      )
    }</span>

    </div>
  );
}

export default Departments;