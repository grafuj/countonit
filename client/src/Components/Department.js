import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import Departments from "./Departments";

const Department = (props) => {
  const location = useLocation();

  let depart = {};
  const depID = Number(location.pathname.replace("/departments/", ""));
  
  props.departments.map((dep) => {
    if (dep.id === depID) {
      depart = dep;
    }
    return undefined;
  });

  const items = function () {
    return props.items.map((item) => {
      if (item.department_id === depart.id) {
        const imgPath = `${item.image}`;
        const path = `/items/${item.id}`;
        return (
          <Link
            key={item.id}
            className="single-item"
            to={path}
            state={{ item: item }}
          >
            <Image
              cloudName="dmamz82ok"
              className="itempic"
              publicId={imgPath}
            ></Image>
            <div>{item.name}</div>
            <div>QTY: {item.quantity}</div>
            <div>Price per unit ${(item.price_cents / 100).toFixed(2)}</div>
          </Link>
        );
      }
      return undefined;
    });
  };
  const departments = function () {
    return props.departments.map((dep) => {
      const path = `/departments/${dep.id}`;
      const imgPath = `/images/truck.jpg`;
      return (
        <Link
          to={path}
          state={{ department: dep }}
          key={dep.id}
          className="single-item-title"
        >
          <img
            className="deppic"
            src={imgPath}
            alt="user-chosen that represents department"
          ></img>
          <div>{dep.name}</div>
        </Link>
      );
    });
  };

  return (
    <>
      <section className="depView">
        <Departments departments={props.departments} />
        <div className="departmentview">
          <div className="departmentName">
            {depart.name || "Folders"}
          </div>

          <div className="items">{depID ? items() : departments()}</div>
        </div>
      </section>
    </>
  );
};

export default Department;
