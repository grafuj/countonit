import React from "react";
// import axios from "axios";
import {Link} from "react-router-dom"
// import Department from "./Department";

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
  console.log("ITEMS", props.items);
  // console.log("DepartmentInfo:", departmentInfo);
  return (
    <section>
      <h3>Organization</h3>
      <div className="boxone">
        <div className="inventory">
          <table className="inventoryTable">
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
          <Link to="/items/new">
            <span>click me</span>
          </Link>
          <div>new button</div>
        </div>
      </div>
      <div className="boxtwo">
        <div>
          <h3>Departments</h3>
          <div className="departments">
            {props.departments.map((department) => {
              let total = 0;
              let value = 0;
              departmentInfo[department.id].map((dep) => {
                total += dep.quantity;
                value += dep.price_cents;
              });
              const route = `/departments/${department.id}`
              return (
                <Link key={department.id} className="department" to={route} state={{department: department}}>
                  <span>{department.name}</span>
                  <table className="dep-details">
                    <tbody>
                      <tr>
                        <td>Items:</td>
                        <td>Total Quantity:</td>
                        <td>Total Value</td>
                      </tr>
                      <tr>
                        <td>{departmentInfo[department.id].length}</td>
                        <td>{total}</td>
                        <td>${value / 100}</td>
                      </tr>
                    </tbody> 
                  </table>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="boxthree">
        <div>
          <h3>Stock Levels At or Below Min Level</h3>
          <div className="minlevels">
           <table className="mintable">
            <tbody>
              <tr className="minitem">
                <td colspan="2">Item Name</td>
                <td className="itemvalue">Quantity</td>
                <td className="itemvalue">Minimum Level</td>
              </tr>
              {props.items.map((item) => {
                return (
                  (item.minimum_level > item.quantity) && (
                    <tr key={item.id} className="minitem">
                      <td colspan="2">{item.name}</td>
                      <td className="itemvalue">{item.quantity}</td>
                      <td className="itemvalue">{item.minimum_level}</td>
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
