import React, { useState, useEffect } from "react";
import "./Departments.css";

function Departments(props) {
  const { departments } = props;
  return (
    <section id="departments">
      <h1>Departments</h1>
      <span>
        {departments.map((department) => {
          return (
            <div>
              <p>{department.name}</p>
            </div>
          );
        })}
      </span>
    </section>
  );
}

export default Departments;
