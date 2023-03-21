import React from "react";
import "./Dashboard.css";
import axios from "axios";

function Dashboard(props) {
  const itemCount = props.items.length;
  const departmentsCount = props.departments.length;
  let qtyCount = 0;
  let totalValueCount = 0;
  let departmentInfo = {};
  let stock = [
    { name: "hello", id: 1 },
    { name: "there", id: 2 },
  ];
  props.items.map((item) => {
    qtyCount += item.quantity;
    totalValueCount += Math.floor(item.price_cents * item.quantity);
    // if (item.quantiy < item.min) {
    //   stock.push(item)
    // }
    if (!departmentInfo[item.department_id]) {
      departmentInfo[item.department_id] = [item];
    } else {
      departmentInfo[item.department_id].push(item);
    }
  });
  console.log(departmentInfo[1]);
  console.log("ITEMS", props.items);
  console.log("DepartmentInfo:", departmentInfo);
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
                  <span>Items: {departmentInfo[department.id].length}</span>
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
            <div className="test">
              <div>Stock</div>
              <div>QTY</div>
            </div>

            {stock.map((level) => {
              return (
                <div className="test">
                  <div>{level.name}</div>
                  <div>{level.id}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
