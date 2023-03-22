import React from "react";
import "./Department.css";

const Department = (props) => {
  let qtyCount = 0;
  let totalValueCount = 0;
  const departmentInfo = {};
  let depart = {};
  props.departments.map((dep) => {
    if (dep.id === 3) {
      depart = dep;
    }
  });
  console.log(depart.name);

  return (
    <div className="departmentview">
      <div className="departmentName">{depart.name}</div>
      <div className="items">
        {props.items.map((item) => {
          if (item.department_id === depart.id) {
            console.log("item", item);
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
