import React from "react";
import { useLocation, Link } from "react-router-dom";
import Departments from "./Departments";

const Department = (props) => {
  const location = useLocation();
  console.log("IM HEREEEEE", location);
  let depart = {};
  const depID = Number(location.pathname.replace("/departments/", ""));
  console.log(depID);
  props.departments.map((dep) => {
    if (dep.id === depID) {
      depart = dep;
    }
  });
  const items = function () {
    return props.items.map((item) => {
      if (item.department_id === depart.id) {
        const imgPath = `/images/${item.image}`;
        const path = `/items/${item.id}`;
        return (
          <Link
            key={item.id}
            className="single-item"
            to={path}
            state={{ item: item }}
          >
            <img className="itempic" src={imgPath}></img>
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
      const imgPath = `/images/truck.jpg`;
      return (
        <div key={dep.id} className="single-item">
          <img className="itempic" src={imgPath}></img>
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
        <div className="items">{depID ? items() : departments()}</div>
      </div>
    </section>
  );
};

export default Department;
