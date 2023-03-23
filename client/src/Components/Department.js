import React from "react";
import { useLocation, Link } from "react-router-dom";
import Departments from "./Departments";

const Department = (props) => {
  const location = useLocation();
  console.log("IM HEREEEEE", location);
  let depart = {};
  if (location.state) {
    props.departments.map((dep) => {
      if (dep.id === location.state.department.id) {
        depart = dep;
      }
    });
  }
  // console.log(depart.name);

  const items = function () {
    return props.items.map((item) => {
      if (item.department_id === depart.id) {
        return (
          <div className="single-item">
            <div>{item.image}</div>
            <div>{item.name}</div>
            <div>{item.quantity}</div>
            <div>${item.price_cents / 100}</div>
          </div>
        );
      }
    });
  };
  const departments = function () {
    return props.departments.map((dep) => {
      const path = `/departments/${dep.id}`;
      return (
        <div className="single-item">
          <div>{dep.image}</div>
          <Link to={path} state={{ department: dep }}>
            {dep.name}
          </Link>
        </div>
      );
    });
  };
  return (
    <section className="depView">
      <Departments departments={props.departments} />
      <div className="departmentview">
        <div className="departmentName">{depart.name || "Departments"}</div>
        <div className="items">{location.state ? items() : departments()}</div>
      </div>
    </section>
  );
};

export default Department;
