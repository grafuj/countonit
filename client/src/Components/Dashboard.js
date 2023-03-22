import React from "react";
import axios from "axios";

function Dashboard(props) {
  const newItem = function () {
    window.location = "/items";
  };
  const itemCount = props.items.length;
  const departmentsCount = props.departments.length;
  let qtyCount = 0;
  let totalValueCount = 0;
  const departmentInfo = {};
  const stock = [
    { name: "hello", quantity: 1, min: 3 },
    { name: "there", quantity: 2, min: 4 },
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
          <table>
            <tbody>
              <tr>
                <td>Items:</td>
                <td>Departments:</td>
                <td>Quantity:</td>
                <td>Total Value</td>
              </tr>
              <tr>
                <td>{itemCount}</td>
                <td>{departmentsCount}</td>
                <td>{qtyCount}</td>
                <td>${totalValueCount / 100}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="new">
          <div id="newitem" onClick={newItem}>
            click me
          </div>
          <div>new button</div>
        </div>
      </div>
      <div className="boxtwo">
        <div>
          Departments
          <div className="departments">
            {props.departments.map((department) => {
              let total = 0;
              let value = 0;
              departmentInfo[department.id].map((dep) => {
                total += dep.quantity;
                value += dep.price_cents;
              });
              return (
                <div className="department">
                  <span>{department.name}</span>
                  <div className="dep-details">
                    <span>Items: {departmentInfo[department.id].length}</span>
                    <span>Total QTY: {total}</span>
                    <span>Total Value: ${value / 100}</span>
                  </div>
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
              <div></div>
              <div>Quantity</div>
              <div>Minimum</div>
            </div>

            {stock.map((level) => {
              return (
                <div className="test">
                  <div>{level.name}</div>
                  <div></div>
                  <div>{level.quantity}</div>
                  <div>{level.min}</div>
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
