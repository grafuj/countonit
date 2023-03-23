import React from "react";
import { useLocation } from "react-router-dom";
import Departments from "./Departments";

const Department = (props) => {
  const location = useLocation();
  if (!location.state) {
    window.location = "/departments";
  }
  console.log("IM HEREEEEE", location);
  let depart = {};
  props.departments.map((dep) => {
    if (location.state && dep.id === location.state.department.id) {
      depart = dep;
    }
  });
  // console.log(depart.name);
  if (depart === {}) {
    depart = props.departments[0];
  }
  return (
    <section className="depView">
      <Departments departments={props.departments} />
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
    </section>
  );
};

export default Department;
