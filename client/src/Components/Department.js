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
        const path = `/items/${item.id}`;
        return (
          <Link
            key={item.id}
            className="single-item"
            to={path}
            state={{ item: item }}
          >
            <div>{item.image}</div>
            <div>{item.name}</div>
            <div>QTY: {item.quantity}</div>
            <div>Price per unit ${item.price_cents / 100}</div>
          </Link>
        );
      }
    });
  };
  const departments = function () {
    return props.departments.map((dep) => {
      const path = `/departments/${dep.id}`;
      return (
        <div key={dep.id} className="single-item">
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
