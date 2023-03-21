import React from "react";
import "./Dashboard.css";
import axios from "axios";

function Dashboard(props) {
  const itemCount = props.items.length;
  const departmentsCount = props.departments.length;
  let qtyCount = 0;
  let totalValueCount = 0;
  let departmentInfo = {};
  // let stock = []
  props.items.map((item) => {
    qtyCount += item.quantity;
    totalValueCount += item.price_cents;
    // if qty < min push into stock
  });
  console.log("ITEMS", props.items);

  return (
    <section>
      <h1>Dashboard</h1>
      <div className="boxone">
        <div className="inventory">
          <p> Sum of items: {itemCount}</p>
          <p> Sum of departments: {departmentsCount}</p>
          <p> Sum of Quantity: {qtyCount}</p>
          <p> Sum of Total Value: ${totalValueCount / 100}</p>
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
            {props.departments.map((department) => {
              return (
                <div className="department">
                  <span>{department.name}</span>
                  <span>{department.name}</span>
                  <span>{department.name}</span>
                  <span>{department.name}</span>
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
            <span className="test">test</span>
            <span className="test">test</span>
            <span className="test">test</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
