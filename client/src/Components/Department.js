import React from "react";
import "./Department.css";
import { useLocation } from "react-router-dom";

const Department = (props) => {
  const location = useLocation();
  console.log("IM HEREEEEE", location.state.department.id);
  let depart = {};
  props.departments.map((dep) => {
    if (dep.id === location.state.department.id) {
      depart = dep;
    }
  });
  // console.log(depart.name);

  return (
    <div className="departmentview">
      <div className="departmentName">{depart.name}</div>
      <div className="items">
        {props.items.map((item) => {
          if (item.department_id === depart.id) {
            // console.log("item", item);
            return (
              <div className="single-item">
                <div>{item.image}</div>
                <div>{item.name}</div>
                <div>{item.quantity}</div>
                <div>${item.price_cents / 100}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Department;
