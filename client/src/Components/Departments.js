import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Departments(props) {
  // console.log("PROPS BABYYY", props)
  const { departments } = props;
  return (
    <section id="departments">
      <h3>Folders</h3>
      <span>
        {departments.map((department) => {
          const route = `/departments/${department.id}`;
          return (
            <Link
              key={department.id}
              className="departmentsList"
              to={route}
              state={{ department: department }}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-folder"
                size="2xl"
                style={{ color: " rgb(7, 156, 249)" }}
              />
              <p className="department-name">{department.name}</p>
            </Link>
          );
        })}
      </span>
    </section>
  );
}

export default Departments;
