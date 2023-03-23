import React from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import Department from "./Department";

function Dashboard(props) {
  const itemCount = props.items.length;
  const departmentsCount = props.departments.length;
  let qtyCount = 0;
  let totalValueCount = 0;
  const departmentInfo = {};
  props.items.map((item) => {
    qtyCount += item.quantity;
    totalValueCount += Math.floor(item.price_cents * item.quantity);

    if (!departmentInfo[item.department_id]) {
      departmentInfo[item.department_id] = [item];
    } else {
      departmentInfo[item.department_id].push(item);
    }
  });
  // console.log(departmentInfo[1]);
  // console.log("ITEMS", props.items);
  // console.log("DepartmentInfo:", departmentInfo);
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
          <Link to="/items">
            <span>click me</span>
          </Link>
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
              const route = `/department/${department.id}`
              return (
                <Link className="department" to={route} department={department} departments={props.departments} items={props.items}>
                  <span>{department.name}</span>
                  <div className="dep-details">
                    <span>Items: {departmentInfo[department.id].length}</span>
                    <span>Total QTY: {total}</span>
                    <span>Total Value: ${value / 100}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="boxthree">
        <div>
          Stock Levels At or Below Min Level
          <div className="minlevels">
           <table>
            <tbody>
              <tr className="minitem">
                <td>Item Name</td>
                <td>Quantity</td>
                <td>Minimum Level</td>
              </tr>
              {props.items.map((item) => {
                return (
                  (item.minimum_level > item.quantity) && (
                    <tr className="minitem">
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.minimum_level}</td>
                    </tr>
                  )
                );
              })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
