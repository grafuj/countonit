import React, { useState, useEffect } from "react";
import "./Departments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Departments(props) {
  const { departments } = props;
  return (
    <section id="departments">
      <h1>Departments</h1>
      <span>
        {departments.map((department) => {
          return (
            <div className="departmentsList">
              <FontAwesomeIcon
                icon="fa-solid fa-image"
                size="2xl"
                style={{ color: "#ffffff" }}
              />
              <p>{department.name}</p>
            </div>
          );
        })}
      </span>
    </section>
  );
}

export default Departments;
