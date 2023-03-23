import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Departments(props) {
  const { departments } = props;
  return (
    <section id="departments">
      <h1>Departments</h1>
      <span>
        {departments.map((department) => {
          const route = `/department/${department.id}`;
          return (
            <Link
              className="departmentsList"
              to={route}
              state={{ department: department }}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-image"
                size="2xl"
                style={{ color: "#ffffff" }}
              />
              <p>{department.name}</p>
            </Link>
          );
        })}
      </span>
    </section>
  );
}

export default Departments;
