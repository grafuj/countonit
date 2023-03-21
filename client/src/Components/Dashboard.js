import React from "react";
import "./Dashboard.css";
import axios from "axios";

function Dashboard(props) {
  const itemCount = props.items.length;
  const departmentsCount = props.departments.length;
  let qtyCount = 0;
  let totalValueCount = 0;
  props.items.map((item) => {
    qtyCount += item.quantity;
    totalValueCount += item.price_cents;
  });
  let departmentInfo = {};
  axios
    .get("http://localhost:3000/api/items")
    .then((response) => {
      console.log(response.data[2]);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <section>
      <h1>Dashboard</h1>
      <div className="boxone">
        <div className="inventory">
          <span> Sum of items: {itemCount}</span>
          <span> Sum of departments: {departmentsCount}</span>
          <span> Sum of Quantity: {qtyCount}</span>
          <span> Sum of Total Value: ${totalValueCount / 100}</span>
        </div>
        <div className="new">
          <div>click me</div>
          <div>new button</div>
        </div>
      </div>
      <div className="boxtwo">
        <div>
          Departments
          <div className="departments">
            {props.departments.map((item) => {
              return (
                <div className="department">
                  <span>{item.name} </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="boxthree">
        <div>
          Stock Levels At or Below Min Level
          <div className="minlevels">
            <div className="test">test</div>
            <div className="test">test</div>
            <div className="test">test</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
